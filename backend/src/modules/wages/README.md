# Daily Wage Management System

## Overview
The Daily Wage Management System is integrated with the RD Interlock Factory Operations backend to track worker attendance, calculate wages, manage advances, and automate payment processing.

## Features

### 1. Attendance Tracking
- Mark daily attendance for workers
- Support for bulk attendance updates
- View attendance history with filters

### 2. Automatic Wage Calculation
- **Per Brick Workers**: Wage = Total Bricks × Rate
- **Daily Workers**: Wage = Rate (if present), otherwise 0
- **Monthly Workers**: Excluded from daily wage calculation

### 3. Advance Management
- Give advances to eligible workers (Managers & Telecallers excluded)
- Automatic advance adjustment during wage payment
- Track advance balance and history
- Auto-create cash book entries for advances

### 4. Wage Payment
- Preview calculated wages before payment
- Bulk payment processing
- Automatic advance deduction
- Auto-create cash book entries for payments

## API Endpoints

### Attendance
```
POST   /api/v1/wages/attendance           - Mark attendance
POST   /api/v1/wages/attendance/bulk      - Bulk mark attendance
GET    /api/v1/wages/attendance            - Get attendance records
```

### Wages
```
POST   /api/v1/wages/wages/calculate       - Calculate daily wages
GET    /api/v1/wages/wages                 - Get wage records
POST   /api/v1/wages/wages/pay             - Pay wages
DELETE /api/v1/wages/wages/:id             - Delete unpaid wage
GET    /api/v1/wages/wages/summary         - Get wage summary
```

### Advances
```
POST   /api/v1/wages/workers/:id/advance           - Give advance
GET    /api/v1/wages/workers/:id/advance-history  - Get advance history
GET    /api/v1/wages/workers/:id/advance-balance  - Get current balance
GET    /api/v1/wages/advances/pending              - Get workers with pending advances
```

## Usage Examples

### 1. Mark Attendance
```json
POST /api/v1/wages/attendance
{
  "workerId": "uuid",
  "date": "2026-03-05",
  "present": true
}
```

### 2. Calculate Daily Wages
```json
POST /api/v1/wages/wages/calculate?date=2026-03-05
```

Response:
```json
{
  "success": true,
  "data": {
    "date": "2026-03-05",
    "workers": [
      {
        "workerId": "uuid",
        "workerName": "Raju",
        "role": "OPERATOR",
        "paymentType": "PER_BRICK",
        "rate": 0.5,
        "bricksMade": 1200,
        "wageAmount": 600,
        "advanceBalance": 200,
        "advanceUsed": 200,
        "netPayable": 400
      }
    ],
    "summary": {
      "totalWageAmount": 8600,
      "totalAdvanceUsed": 1500,
      "totalNetPayable": 7100,
      "workerCount": 12
    }
  }
}
```

### 3. Give Advance
```json
POST /api/v1/wages/workers/{workerId}/advance
{
  "amount": 500,
  "note": "Emergency advance"
}
```

### 4. Pay Wages
```json
POST /api/v1/wages/wages/pay
{
  "wageIds": ["uuid1", "uuid2", "uuid3"],
  "paymentDate": "2026-03-05"
}
```

## Business Rules

### Worker Types
- **Per Brick**: Calculate wage based on bricks produced
- **Daily**: Fixed daily wage (requires attendance)
- **Monthly**: Not included in daily wage calculation

### Attendance Rules
- Per Brick workers: Attendance optional (wage based on production)
- Daily workers: Attendance mandatory (no attendance = no wage)

### Advance Rules
- Managers and Telecallers CANNOT receive advances
- Advances automatically deducted from wages
- Advances create cash book DEBIT entries
- Advance adjustments tracked in WorkerAdvance table

### Payment Rules
- Cannot pay already-paid wages
- Paying wages creates cash book DEBIT entries
- Advance automatically adjusted if balance > 0
- Net Payable = Wage Amount - Advance Used

## Database Models

### Attendance
- workerId (FK to Worker)
- date
- present (boolean)

### DailyWage
- workerId (FK to Worker)
- date
- bricksMade (nullable)
- wageAmount
- advanceUsed
- netPayable
- isPaid

### WorkerAdvance
- workerId (FK to Worker)
- amount
- type (GIVEN | ADJUSTED)
- date
- note

### Worker (Updated)
- Added: advanceBalance (tracks current advance balance)

## Integration Points

### With Production
- Reads ProductionWorker records to calculate brick-based wages
- Uses date filter to get same-day production

### With CashBook
- Creates DEBIT entries when giving advances
- Creates DEBIT entries when paying wages (category: "WAGE")

### With Worker
- Updates advanceBalance field
- Uses paymentType and rate for calculations
- Filters out MONTHLY payment type workers

## Workflow

1. **Daily Start**: Mark attendance for all workers
2. **During Day**: Production entries recorded as usual
3. **End of Day**: Calculate wages using `/wages/calculate`
4. **Review**: Check calculated wages and summary
5. **Payment**: Pay wages using `/wages/pay`
6. **Automatic**: System handles advance adjustment and cash book entries

## Error Handling
- Duplicate attendance prevented by unique constraint
- Cannot calculate wages twice for same date
- Cannot delete paid wage records
- Validates worker exists and is active
- Validates positive amounts for advances
- Restricts advance to eligible worker roles

## Notes
- All monetary values in rupees (₹)
- Dates in ISO format (YYYY-MM-DD)
- All endpoints require authentication
- Advance balance maintained at worker level
- Historical data preserved for audit
