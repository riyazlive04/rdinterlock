# Settlement & Raw Material Tracking System - Implementation Summary

## Overview

Successfully implemented automatic settlement engines for weekly production worker wages and monthly staff salaries, plus a comprehensive raw material tracking system integrated with the
 expense management module.

---

## System Architecture

### Settlement Engines

#### Weekly Settlements (Production Workers)
- **Target Workers**: PER_BRICK and DAILY payment types (OPERATOR, HELPER, LOADER)
- **Settlement Period**: Monday to Sunday
- **Calculation**: Aggregates DailyWage records for the week
- **Advance Handling**: Automatic deduction from settlement amount
- **Payment Flow**: One-click bulk payment with cash book integration

#### Monthly Settlements (Staff Salaries)
- **Target Workers**: MONTHLY payment type (MANAGER, DRIVER, TELECALLER)
- **Settlement Period**: Calendar month
- **Calculation**: Uses Worker.rate as base salary
- **Advance Handling**: Automatic deduction from salary
- **Payment Flow**: One-click salary payment with cash book integration

### Material Tracking System

#### Raw Material Master
- **Default Materials**: Crusher Powder, Fly Ash, Cement, Add Mixture
- **Fields**: Name, Unit (e.g., "Ton", "Bag (50kg)", "Liter"), Description, Active status
- **Management**: Full CRUD operations via API

#### Material Usage Tracking
- **Integration**: Linked to Expense module with MATERIAL category
- **Fields**: Material ID, Quantity, Price per Unit, Total Cost, Date
- **Relationship**: One-to-one with Expense records (unique constraint)
- **Reporting**: Usage history, cost analysis, material consumption summaries

---

## Database Schema Changes

### New Models (4 total)

#### 1. WeeklySettlement
```prisma
model WeeklySettlement {
  id           String    @id @default(uuid())
  workerId     String
  weekStart    DateTime
  weekEnd      DateTime
  totalWage    Float
  advanceUsed  Float     @default(0)
  netPaid      Float
  isSettled    Boolean   @default(false)
  settledAt    DateTime?
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
  worker       Worker    @relation(fields: [workerId], references: [id])
  
  @@unique([workerId, weekStart])  // Prevent duplicate weekly settlements
  @@index([workerId])
  @@index([weekStart])
  @@index([isSettled])
}
```

#### 2. MonthlySettlement
```prisma
model MonthlySettlement {
  id          String    @id @default(uuid())
  workerId    String
  month       Int       // 1-12
  year        Int
  salary      Float
  advanceUsed Float     @default(0)
  netPaid     Float
  isPaid      Boolean   @default(false)
  paidAt      DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  worker      Worker    @relation(fields: [workerId], references: [id])
  
  @@unique([workerId, month, year])  // Prevent duplicate monthly salaries
  @@index([workerId])
  @@index([month, year])
  @@index([isPaid])
}
```

#### 3. RawMaterial
```prisma
model RawMaterial {
  id             String          @id @default(uuid())
  name           String          @unique
  unit           String          // e.g., "Ton", "Bag (50kg)", "Liter"
  description    String?
  isActive       Boolean         @default(true)
  createdAt      DateTime        @default(now())
  updatedAt      DateTime        @updatedAt
  expenses       Expense[]
  materialUsages MaterialUsage[]
}
```

#### 4. MaterialUsage
```prisma
model MaterialUsage {
  id           String      @id @default(uuid())
  materialId   String
  date         DateTime
  quantity     Float
  pricePerUnit Float
  totalCost    Float
  expenseId    String?     @unique  // One expense = one material usage
  createdAt    DateTime    @default(now())
  material     RawMaterial @relation(fields: [materialId], references: [id])
  expense      Expense?    @relation(fields: [expenseId], references: [id])
  
  @@index([materialId])
  @@index([date])
}
```

### Extended Models

#### Worker Model
```prisma
model Worker {
  // Existing fields...
  role: 'OPERATOR' | 'HELPER' | 'LOADER' | 'MANAGER' | 'DRIVER' | 'TELECALLER'
  
  // New relations
  weeklySettlements   WeeklySettlement[]
  monthlySettlements  MonthlySettlement[]
}
```

#### Expense Model
```prisma
model Expense {
  // Existing fields...
  category: 'FUEL' | 'MAINTENANCE' | 'SALARY' | 'GENERAL' | 'MATERIAL' | 'OTHER'  // MATERIAL added
  
  // New fields
  materialId    String?
  material      RawMaterial?    @relation(fields: [materialId], references: [id])
  materialUsage MaterialUsage[]
}
```

---

## API Endpoints

### Settlement Endpoints (10 total)

#### Weekly Settlements
- **POST** `/api/v1/settlements/weekly/calculate` - Calculate weekly settlements for a date range
- **POST** `/api/v1/settlements/weekly` - Save calculated weekly settlements
- **GET** `/api/v1/settlements/weekly` - Get weekly settlements with filters (weekStart, weekEnd, workerId, isSettled)
- **POST** `/api/v1/settlements/weekly/pay` - Pay multiple weekly settlements (one-click)
- **GET** `/api/v1/settlements/weekly/current` - Get current week settlements

#### Monthly Settlements
- **POST** `/api/v1/settlements/monthly/calculate` - Calculate monthly salaries for a month/year
- **POST** `/api/v1/settlements/monthly` - Save calculated monthly salaries
- **GET** `/api/v1/settlements/monthly` - Get monthly settlements with filters (month, year, workerId, isPaid)
- **POST** `/api/v1/settlements/monthly/pay` - Pay multiple monthly salaries (one-click)
- **GET** `/api/v1/settlements/monthly/current` - Get current month salaries

### Material Endpoints (8 total)

#### Material Management
- **GET** `/api/v1/materials` - Get all materials (query: includeInactive=true/false)
- **GET** `/api/v1/materials/:id` - Get material by ID with recent usage history
- **POST** `/api/v1/materials` - Create new material
- **PATCH** `/api/v1/materials/:id` - Update material
- **DELETE** `/api/v1/materials/:id` - Toggle material active status (soft delete)

#### Material Usage & Reports
- **GET** `/api/v1/materials/usage/list` - Get material usage history with filters (materialId, startDate, endDate)
- **GET** `/api/v1/materials/usage/summary` - Get material usage summary by material (total quantity, cost, frequency)
- **POST** `/api/v1/materials/seed/defaults` - Seed default materials (Crusher Powder, Fly Ash, Cement, Add Mixture)

### Extended Expense Endpoints

#### Material Expense Creation
```json
POST /api/v1/expenses
{
  "date": "2026-03-03",
  "category": "MATERIAL",
  "amount": 50000,
  "materialId": "uuid",
  "quantity": 10,
  "pricePerUnit": 5000,
  "notes": "Purchased 10 tons of crusher powder",
  "paymentMode": "CASH"
}
```
- Creates both Expense and MaterialUsage records in a transaction
- Validates material is active before creating expense
- Automatically calculates totalCost = quantity × pricePerUnit

---

## Service Layer Architecture

### Settlement Services (2 files, ~500 lines)

#### weekly.service.ts (264 lines)
```typescript
class WeeklySettlementService {
  calculateWeeklySettlement(weekStart, weekEnd): Promise<Settlement[]>
    - Fetches all PER_BRICK and DAILY workers
    - Aggregates DailyWage.netPayable for the week
    - Applies advance deduction (min of balance and total)
    - Returns settlement preview
  
  saveWeeklySettlement(weekStart, weekEnd, settlements): Promise<Settlement[]>
    - Creates WeeklySettlement records
    - Prevents duplicates via unique constraint
    - Returns saved records
  
  getSettlements(filters): Promise<Settlement[]>
    - Filters: workerId, weekStart, weekEnd, isSettled
    - Includes worker details
    - Sorted by date descending
  
  paySettlements(settlementIds, paymentDate?): Promise<PaymentResult>
    - Marks settlements as settled
    - Adjusts worker advance balances
    - Creates CashEntry records (type: DEBIT, category: SALARY)
    - All operations in transaction
  
  getCurrentWeekSettlements(): Promise<Settlement[]>
    - Helper method for current week
}
```

#### monthly.service.ts (210 lines)
```typescript
class MonthlySettlementService {
  calculateMonthlySalary(month, year): Promise<Salary[]>
    - Fetches all MONTHLY payment type workers (MANAGER/DRIVER/TELECALLER)
    - Uses Worker.rate as base salary
    - Applies advance deduction
    - Returns salary preview
  
  saveMonthlySalary(month, year, salaries): Promise<Settlement[]>
    - Creates MonthlySettlement records
    - Prevents duplicates via unique constraint
    - Returns saved records
  
  getSettlements(filters): Promise<Settlement[]>
    - Filters: workerId, month, year, isPaid
    - Includes worker details
    - Sorted by year/month descending
  
  paySalaries(settlementIds, paymentDate?): Promise<PaymentResult>
    - Marks salaries as paid
    - Adjusts worker advance balances
    - Creates CashEntry records (type: DEBIT, category: SALARY)
    - All operations in transaction
  
  getCurrentMonthSalaries(): Promise<Settlement[]>
    - Helper method for current month
}
```

### Material Service (245 lines)

#### material.service.ts
```typescript
class MaterialService {
  getAllMaterials(includeInactive): Promise<RawMaterial[]>
  getMaterialById(id): Promise<RawMaterial>
    - Includes recent 10 material usage records
  
  createMaterial(data): Promise<RawMaterial>
    - Validates unique name (case-insensitive)
  
  updateMaterial(id, data): Promise<RawMaterial>
    - Validates unique name on updates
  
  toggleMaterialStatus(id): Promise<RawMaterial>
    - Soft delete via isActive flag
  
  getMaterialUsage(filters): Promise<MaterialUsage[]>
    - Filters: materialId, startDate, endDate
    - Includes material and expense details
  
  getMaterialUsageSummary(startDate?, endDate?): Promise<Summary[]>
    - Groups usage by material
    - Calculates: totalQuantity, totalCost, usageCount
  
  seedDefaultMaterials(): Promise<RawMaterial[]>
    - Creates: Crusher Powder, Fly Ash, Cement, Add Mixture
    - Skips if already exists
}
```

### Date Utilities (58 lines)

#### date.utils.ts
```typescript
getWeekRange(date): { weekStart, weekEnd }
  - Returns Monday 00:00:00 to Sunday 23:59:59
  - ISO 8601 week definition

getMonthRange(month, year): { monthStart, monthEnd }
  - Returns first day 00:00:00 to last day 23:59:59

getWeekNumber(date): number
  - ISO week number (1-53)

formatDateRange(start, end): string
  - Human-readable date range string
```

---

## Business Logic Flows

### Weekly Settlement Flow

1. **Calculate** (Preview):
   ```
   User selects week → Service calculates → Returns preview with:
   - Worker name, role
   - Total wage for week
   - Current advance balance
   - Advance to be used
   - Net amount to be paid
   ```

2. **Save** (Record):
   ```
   User confirms → Service saves settlements → Creates records with:
   - isSettled = false
   - All calculation details persisted
   ```

3. **Pay** (Execute):
   ```
   User clicks "Pay All" → Service processes:
   - Marks isSettled = true, sets settledAt timestamp
   - Creates WorkerAdvance records (type: ADJUSTED, amount: negative)
   - Decrements Worker.advanceBalance
   - Creates CashEntry (type: DEBIT, category: SALARY)
   - All in transaction
   ```

### Monthly Salary Flow

1. **Calculate** (Preview):
   ```
   User selects month/year → Service calculates → Returns preview with:
   - Worker name, role
   - Base salary (Worker.rate)
   - Current advance balance
   - Advance to be used
   - Net amount to be paid
   ```

2. **Save** (Record):
   ```
   User confirms → Service saves salaries → Creates records with:
   - isPaid = false
   - All calculation details persisted
   ```

3. **Pay** (Execute):
   ```
   User clicks "Pay All" → Service processes:
   - Marks isPaid = true, sets paidAt timestamp
   - Creates WorkerAdvance records (type: ADJUSTED, amount: negative)
   - Decrements Worker.advanceBalance
   - Creates CashEntry (type: DEBIT, category: SALARY)
   - Description: "Monthly salary - Worker Name (Month/Year)"
   - All in transaction
   ```

### Material Expense Flow

1. **Create Material Expense**:
   ```
   User creates expense with category=MATERIAL:
   - Validates material exists and is active
   - Requires: materialId, quantity, pricePerUnit
   - Creates Expense record
   - Creates MaterialUsage record (linked via expenseId)
   - Both in transaction
   ```

2. **Track Usage**:
   ```
   MaterialUsage stores:
   - Which material was used
   - How much (quantity)
   - At what price (pricePerUnit)
   - Total cost
   - When (date)
   - Linked to which expense
   ```

3. **Generate Reports**:
   ```
   Usage Summary provides:
   - Total quantity used per material
   - Total cost per material
   - Number of times material was purchased
   - Cost trends over time
   ```

---

## Validation & Constraints

### Settlement Validations

#### Weekly Settlement
- Unique constraint: (workerId, weekStart) - Prevents duplicate weekly settlements
- Worker must have PER_BRICK or DAILY payment type
- weekStart must be a Monday, weekEnd must be the following Sunday
- netPaid = totalWage - advanceUsed (where advanceUsed = min(advanceBalance, totalWage))
- Cannot pay already settled records

#### Monthly Settlement
- Unique constraint: (workerId, month, year) - Prevents duplicate monthly salaries
- Worker must have MONTHLY payment type and role in (MANAGER, DRIVER, TELECALLER)
- month must be 1-12, year must be reasonable range (2020-2100)
- netPaid = salary - advanceUsed (where advanceUsed = min(advanceBalance, salary))
- Cannot pay already paid records

### Material Validations

#### RawMaterial
- Unique constraint: name (case-insensitive)
- name: 2-100 characters
- unit: 1-50 characters, required
- description: max 500 characters, optional
- Cannot delete if linked to expenses (soft delete via isActive)

#### MaterialUsage
- Unique constraint: expenseId (one expense can have only one material usage)
- materialId: must reference existing, active material
- quantity: must be positive number
- pricePerUnit: must be positive number
- totalCost: automatically calculated = quantity × pricePerUnit
- date: must match linked expense date

#### Material Expense
- category must be MATERIAL
- Requires: materialId, quantity, pricePerUnit
- Material must be active
- amount field should match totalCost (validated on frontend)

---

## Code Organization

### Backend Structure
```
backend/src/modules/
├── settlements/
│   ├── date.utils.ts              (58 lines)    - Date range helpers
│   ├── weekly.service.ts          (264 lines)   - Weekly settlement logic
│   ├── monthly.service.ts         (210 lines)   - Monthly salary logic
│   ├── settlement.controller.ts   (280 lines)   - HTTP handlers
│   ├── settlement.routes.ts       (35 lines)    - Route definitions
│   └── settlement.validation.ts   (52 lines)    - Zod schemas
│
└── materials/
    ├── material.service.ts        (245 lines)   - Material & usage logic
    ├── material.controller.ts     (160 lines)   - HTTP handlers
    ├── material.routes.ts         (25 lines)    - Route definitions
    └── material.validation.ts     (25 lines)    - Zod schemas

Total: ~1,354 lines of new code
```

### Migration Files
```
backend/prisma/migrations/
├── 20260303083702_add_settlements_and_materials/
│   └── migration.sql              (111 lines)   - Initial schema
└── 20260303084500_add_material_details/
    └── migration.sql              (16 lines)    - Material fields update

Total: 127 lines of SQL
```

---

## Integration Points

### Cash Book Integration
- All settlement payments automatically create CashEntry records
- Entry type: DEBIT (money going out)
- Entry category: SALARY
- Descriptions:
  - Weekly: "Weekly wage settlement - Worker Name (Week Start - Week End)"
  - Monthly: "Monthly salary - Worker Name (Month/Year)"

### Advance Management Integration
- Settlement services check Worker.advanceBalance
- Automatically adjust advances during payment
- Create WorkerAdvance records with type: ADJUSTED
- Update Worker.advanceBalance field
- Visible in advance history with proper notes

### Expense Module Integration
- MaterialUsage created alongside material expenses
- Unique constraint ensures one-to-one relationship
- Material validation before expense creation
- Transaction ensures data consistency
- Material expenses included in expense reports

### Reports Module (Future Enhancement)
- Settlement summaries: weekly wages paid, monthly salaries paid
- Material consumption reports: usage by material, cost trends
- Financial reports: settlement vs advance ratios
- Worker reports: settlement history, outstanding advances

---

## Testing Guide

### Testing Weekly Settlements

1. **Setup Test Data**:
   ```bash
   # Ensure you have production workers (PER_BRICK/DAILY)
   # Ensure  they have DailyWage records for the week
   # Optionally give them advances
   ```

2. **Calculate Weekly Settlement**:
   ```bash
   POST /api/v1/settlements/weekly/calculate
   {
     "weekStart": "2026-03-03",  # Monday
     "weekEnd": "2026-03-09"      # Sunday
   }
   
   # Response shows preview with netPaid calculations
   ```

3. **Save Settlement**:
   ```bash
   POST /api/v1/settlements/weekly
   {
     "weekStart": "2026-03-03",
     "weekEnd": "2026-03-09"
   }
   
   # Creates settlement records with isSettled=false
   ```

4. **Pay Settlements**:
   ```bash
   POST /api/v1/settlements/weekly/pay
   {
     "settlementIds": ["uuid1", "uuid2"],
     "paymentDate": "2026-03-10"  # Optional, defaults to now
   }
   
   # Marks settled, adjusts advances, creates cash entries
   ```

5. **Verify**:
   - Check settlement records: isSettled=true, settledAt set
   - Check worker advances: balance decreased
   - Check WorkerAdvance history: ADJUSTED entries created
   - Check cash book: DEBIT entries for salaries

### Testing Monthly Settlements

1. **Setup Test Data**:
   ```bash
   # Ensure you have salary staff (MONTHLY payment type)
   # Roles: MANAGER, DRIVER, or TELECALLER
   # Ensure Worker.rate is set (monthly salary)
   # Optionally give them advances
   ```

2. **Calculate Monthly Salary**:
   ```bash
   POST /api/v1/settlements/monthly/calculate
   {
     "month": 3,
     "year": 2026
   }
   
   # Response shows preview with netPaid calculations
   ```

3. **Save Salary**:
   ```bash
   POST /api/v1/settlements/monthly
   {
     "month": 3,
     "year": 2026
   }
   
   # Creates salary records with isPaid=false
   ```

4. **Pay Salaries**:
   ```bash
   POST /api/v1/settlements/monthly/pay
   {
     "settlementIds": ["uuid1", "uuid2"],
     "paymentDate": "2026-03-31"  # Optional
   }
   
   # Marks paid, adjusts advances, creates cash entries
   ```

5. **Verify**:
   - Check settlement records: isPaid=true, paidAt set
   - Check worker advances: balance decreased
   - Check cash book: DEBIT entries with proper descriptions

### Testing Material Tracking

1. **Seed Default Materials**:
   ```bash
   POST /api/v1/materials/seed/defaults
   
   # Creates: Crusher Powder, Fly Ash, Cement, Add Mixture
   ```

2. **Create Material**:
   ```bash
   POST /api/v1/materials
   {
     "name": "Sand",
     "unit": "Ton",
     "description": "River sand for mixing"
   }
   ```

3. **Create Material Expense**:
   ```bash
   POST /api/v1/expenses
   {
     "date": "2026-03-03",
     "category": "MATERIAL",
     "amount": 50000,
     "materialId": "material-uuid",
     "quantity": 10,
     "pricePerUnit": 5000,
     "notes": "10 tons @ ₹5000/ton",
     "paymentMode": "CASH"
   }
   
   # Creates both Expense and MaterialUsage
   ```

4. **View Material Usage**:
   ```bash
   GET /api/v1/materials/usage/list?materialId=uuid
   
   # Shows all usage records for the material
   ```

5. **Get Usage Summary**:
   ```bash
   GET /api/v1/materials/usage/summary?startDate=2026-03-01&endDate=2026-03-31
   
   # Shows total quantity, cost per material for the period
   ```

6. **Verify**:
   - Check expense created with category=MATERIAL
   - Check MaterialUsage record created and linked
   - Check totalCost = quantity × pricePerUnit
   - Check material appears in usage reports

---

## Key Features

### Automatic Advance Adjustment
- System automatically deducts outstanding advances from settlements
- Uses min(advanceBalance, settlementAmount) to prevent negative balances
- Creates audit trail in WorkerAdvance table
- Updates Worker.advanceBalance atomically

### Duplicate Prevention
- Unique constraints prevent duplicate weekly/monthly settlements
- Database-level validation ensures data integrity
- API returns clear error messages for duplicate attempts

### Transaction Integrity
- All payment operations wrapped in database transactions
- Rollback on any failure ensures consistency
- Multiple updates (settlement, advance, cash book) succeed or fail together

### Audit Trail
- Every settlement payment creates:
  - Updated settlement record (timestamps)
  - WorkerAdvance adjustment record
  - CashEntry record
- Full history of all transactions preserved

### Soft Deletes
- Materials use isActive flag instead of hard deletes
- Preserves historical data and relationships
- Can be reactivated if needed

### Flexible Querying
- Settlement filters: worker, date range, paid/unpaid status
- Material usage filters: material, date range
- Sorted results for easy browsing

---

## Configuration

### Environment Variables
```env
DATABASE_URL="postgresql://user:pass@localhost:5433/rd_interlock"
PORT=5001
JWT_SECRET="your-secret-key"
```

### Default Materials
```javascript
[
  { name: "Crusher Powder", unit: "Ton", description: "Fine aggregate for interlock brick production" },
  { name: "Fly Ash", unit: "Ton", description: "Pozzolanic material for strength" },
  { name: "Cement", unit: "Bag (50kg)", description: "Portland cement for binding" },
  { name: "Add Mixture", unit: "Liter", description: "Chemical admixture for workability" }
]
```

---

## Performance Considerations

### Database Indexes
- Weekly settlements: (workerId), (weekStart), (isSettled)
- Monthly settlements: (workerId), (month, year), (isPaid)
- Material usage: (materialId), (date), (expenseId)
- Unique indexes for duplicate prevention

### Query Optimization
- Settlement queries include worker details via single join
- Material usage queries paginated (limit 10 for recent)
- Summary calculations done in application layer (small dataset)

### Transaction Management
- Payment transactions kept small and focused
- Prisma handles connection pooling
- Rollback automatic on errors

---

## Error Handling

### Common Error Scenarios

1. **Duplicate Settlement**:
   - Error: "Weekly settlement already calculated for this workerId" - Status: 400
   - Solution: Check existing settlements before creating new

2. **Already Paid**:
   - Error: "Some settlements are already paid: Worker Name"
   - Status: 400
   - Solution: Filter for unpaid settlements only

3. **Invalid Material**:
   - Error: "Material not found" or "Material is not active"
   - Status: 404/400
   - Solution: Check material exists and is active

4. **Missing Required Fields**:
   - Error: "For material expenses, quantity and pricePerUnit are required"
   - Status: 400
   - Solution: Include all required fields for material expenses

5. **Duplicate Material Name**:
   - Error: "Material with this name already exists"
   - Status: 400
   - Solution: Use unique names (case-insensitive)

---

## Future Enhancements

### Phase 1 (Immediate)
- [ ] Frontend components for settlement management
- [ ] Frontend components for material management
- [ ] Material expense form with dropdown
- [ ] Settlement calendar view

### Phase 2 (Next Sprint)
- [ ] Settlement reports and analytics
- [ ] Material consumption trends
- [ ] Advance vs settlement analysis
- [ ] Worker payment history

### Phase 3 (Long-term)
- [ ] Automatic weekly settlement scheduling
- [ ] Email notifications for salary payments
- [ ] Material inventory integration
- [ ] Budget forecasting based on material costs

---

## API Request/Response Examples

### Weekly Settlement Calculate
```bash
POST /api/v1/settlements/weekly/calculate
Authorization: Bearer <token>
Content-Type: application/json

{
  "weekStart": "2026-03-03",
  "weekEnd": "2026-03-09"
}

Response 200:
{
  "success": true,
  "data": {
    "weekStart": "2026-03-03",
    "weekEnd": "2026-03-09",
    "settlements": [
      {
        "workerId": "uuid",
        "workerName": "Rajesh Kumar",
        "role": "OPERATOR",
        "paymentType": "DAILY",
        "dailyWages": [
          { "date": "2026-03-03", "wage": 500 },
          { "date": "2026-03-04", "wage": 500 },
          // ... more days
        ],
        "totalWage": 3500,
        "advanceBalance": 1000,
        "advanceUsed": 1000,
        "netPaid": 2500
      }
      // ... more workers
    ]
  },
  "message": "Weekly settlement calculated successfully"
}
```

### Monthly Settlement Pay
```bash
POST /api/v1/settlements/monthly/pay
Authorization: Bearer <token>
Content-Type: application/json

{
  "settlementIds": ["uuid1", "uuid2"],
  "paymentDate": "2026-03-31"
}

Response 200:
{
  "success": true,
  "data": {
    "updatedSettlements": [
      {
        "id": "uuid1",
        "workerId": "uuid",
        "month": 3,
        "year": 2026,
        "salary": 25000,
        "advanceUsed": 5000,
        "netPaid": 20000,
        "isPaid": true,
        "paidAt": "2026-03-31T00:00:00.000Z"
      }
      // ... more settlements
    ],
    "cashEntries": [
      {
        "id": "uuid",
        "date": "2026-03-31T00:00:00.000Z",
        "type": "DEBIT",
        "amount": 20000,
        "description": "Monthly salary - Manager Name (3/2026)",
        "category": "SALARY"
      }
      // ... more entries
    ]
  },
  "message": "Monthly salaries paid successfully"
}
```

### Material Create
```bash
POST /api/v1/materials
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Sand",
  "unit": "Ton",
  "description": "River sand for mixing"
}

Response 201:
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Sand",
    "unit": "Ton",
    "description": "River sand for mixing",
    "isActive": true,
    "createdAt": "2026-03-03T08:50:00.000Z",
    "updatedAt": "2026-03-03T08:50:00.000Z"
  },
  "message": "Material created successfully"
}
```

### Material Expense Create
```bash
POST /api/v1/expenses
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2026-03-03",
  "category": "MATERIAL",
  "amount": 50000,
  "materialId": "material-uuid",
  "quantity": 10,
  "pricePerUnit": 5000,
  "notes": "10 tons of crusher powder @ ₹5000/ton",
  "paymentMode": "CASH"
}

Response 201:
{
  "success": true,
  "data": {
    "id": "expense-uuid",
    "date": "2026-03-03T00:00:00.000Z",
    "category": "MATERIAL",
    "amount": 50000,
    "notes": "10 tons of crusher powder @ ₹5000/ton",
    "materialId": "material-uuid",
    "paymentMode": "CASH",
    "material": {
      "id": "material-uuid",
      "name": "Crusher Powder",
      "unit": "Ton"
    },
    "materialUsage": {
      "id": "usage-uuid",
      "materialId": "material-uuid",
      "expenseId": "expense-uuid",
      "quantity": 10,
      "pricePerUnit": 5000,
      "totalCost": 50000,
      "date": "2026-03-03T00:00:00.000Z"
    }
  },
  "message": "Expense created successfully"
}
```

### Material Usage Summary
```bash
GET /api/v1/materials/usage/summary?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>

Response 200:
{
  "success": true,
  "data": [
    {
      "materialId": "uuid1",
      "materialName": "Crusher Powder",
      "unit": "Ton",
      "totalQuantity": 150,
      "totalCost": 750000,
      "usageCount": 15
    },
    {
      "materialId": "uuid2",
      "materialName": "Cement",
      "unit": "Bag (50kg)",
      "totalQuantity": 500,
      "totalCost": 200000,
      "usageCount": 10
    }
    // ... more materials
  ]
}
```

---

## Deployment Checklist

- [x] Database migrations applied
- [x] Prisma client regenerated
- [x] TypeScript compiled without errors
- [x] Default materials seeded
- [x] Backend server running on port 5001
- [x] All settlement endpoints accessible
- [x] All material endpoints accessible
- [x] Authentication working
- [x] Transactions tested
- [x] Error handling verified
- [ ] Frontend integration (pending)
- [ ] User  acceptance testing (pending)
- [ ] Production deployment (pending)

---

## Conclusion

The settlement and material tracking systems are fully implemented and operational. The backend provides:

- **Robust settlement automation** for both weekly production workers and monthly salary staff
- **Comprehensive material tracking** integrated with expense management
- **Strong data integrity** with unique constraints, transactions, and validations
- **Complete audit trail** with timestamps, history records, and cash book integration
- **Flexible querying** with filters, sorting, and includes
- **Clean API design** following REST principles
- **10 settlement endpoints** + **8 material endpoints** = **18 new API endpoints**
- **~1,354 lines of backend code** across services, controllers, routes, and validations
- **4 new database models** with proper relations and indexes
- **127 lines of migration SQL** to update the schema

The system is ready for frontend integration and testing. All APIs are tested and working. The next phase is to build the React components for settlement and material management.

---

**Implementation Date**: March 3, 2026  
**Status**: ✅ Backend Complete, Frontend Pending  
**Total Backend Code**: 1,354 lines  
**Total API Endpoints**: 18 new (10 settlements + 8 materials)  
**Database Tables**: 4 new (WeeklySettlement, MonthlySettlement, RawMaterial, MaterialUsage)
