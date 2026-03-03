# Daily Wage Management System - Testing Guide

## Prerequisites
- Backend server running on http://localhost:5001
- Admin logged in with JWT token
- Some workers and production data already seeded

## Test Flow

### 1. Get All Workers
```bash
GET http://localhost:5001/api/v1/workers
Authorization: Bearer <token>
```

### 2. Mark Attendance (Single Worker)
```bash
POST http://localhost:5001/api/v1/wages/attendance
Authorization: Bearer <token>
Content-Type: application/json

{
  "workerId": "worker-uuid-here",
  "date": "2026-03-05",
  "present": true
}
```

### 3. Mark Attendance (Bulk)
```bash
POST http://localhost:5001/api/v1/wages/attendance/bulk
Authorization: Bearer <token>
Content-Type: application/json

{
  "records": [
    {
      "workerId": "worker-uuid-1",
      "date": "2026-03-05",
      "present": true
    },
    {
      "workerId": "worker-uuid-2",
      "date": "2026-03-05",
      "present": true
    },
    {
      "workerId": "worker-uuid-3",
      "date": "2026-03-05",
      "present": false
    }
  ]
}
```

### 4. Get Attendance Records
```bash
# All attendance
GET http://localhost:5001/api/v1/wages/attendance
Authorization: Bearer <token>

# By date
GET http://localhost:5001/api/v1/wages/attendance?date=2026-03-05
Authorization: Bearer <token>

# By worker
GET http://localhost:5001/api/v1/wages/attendance?workerId=worker-uuid
Authorization: Bearer <token>

# Date range
GET http://localhost:5001/api/v1/wages/attendance?startDate=2026-03-01&endDate=2026-03-05
Authorization: Bearer <token>
```

### 5. Give Advance to Worker
```bash
POST http://localhost:5001/api/v1/wages/workers/{workerId}/advance
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 500,
  "note": "Emergency advance for medical expenses"
}
```

**Expected:**
- WorkerAdvance record created with type "GIVEN"
- Worker's advanceBalance increased by 500
- CashEntry created (DEBIT, category: ADVANCE)

### 6. Get Worker Advance Balance
```bash
GET http://localhost:5001/api/v1/wages/workers/{workerId}/advance-balance
Authorization: Bearer <token>
```

### 7. Get Advance History
```bash
# All advances for a worker
GET http://localhost:5001/api/v1/wages/workers/{workerId}/advance-history
Authorization: Bearer <token>

# Filtered by type
GET http://localhost:5001/api/v1/wages/workers/{workerId}/advance-history?type=GIVEN
Authorization: Bearer <token>

# Date range
GET http://localhost:5001/api/v1/wages/workers/{workerId}/advance-history?startDate=2026-03-01&endDate=2026-03-05
Authorization: Bearer <token>
```

### 8. Get Workers with Pending Advances
```bash
GET http://localhost:5001/api/v1/wages/advances/pending
Authorization: Bearer <token>
```

### 9. Calculate Daily Wages
```bash
POST http://localhost:5001/api/v1/wages/wages/calculate?date=2026-03-05
Authorization: Bearer <token>
```

**Expected Response:**
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
        "advanceBalance": 500,
        "advanceUsed": 500,
        "netPayable": 100
      },
      {
        "workerId": "uuid",
        "workerName": "Mohan",
        "role": "HELPER",
        "paymentType": "DAILY",
        "rate": 400,
        "bricksMade": 0,
        "wageAmount": 400,
        "advanceBalance": 0,
        "advanceUsed": 0,
        "netPayable": 400
      }
    ],
    "summary": {
      "totalWageAmount": 8600,
      "totalAdvanceUsed": 1500,
      "totalNetPayable": 7100,
      "workerCount": 12
    }
  },
  "message": "Wages calculated successfully"
}
```

**Calculation Logic:**
- Per Brick Worker: Sum all bricks from ProductionWorker table × rate
- Daily Worker: If attendance.present = true → rate, else 0
- Monthly Worker: Excluded
- Advance Used: min(advanceBalance, wageAmount)
- Net Payable: wageAmount - advanceUsed

### 10. Get Calculated Wages
```bash
# By date
GET http://localhost:5001/api/v1/wages/wages?date=2026-03-05
Authorization: Bearer <token>

# By worker
GET http://localhost:5001/api/v1/wages/wages?workerId=worker-uuid
Authorization: Bearer <token>

# Date range
GET http://localhost:5001/api/v1/wages/wages?startDate=2026-03-01&endDate=2026-03-05
Authorization: Bearer <token>

# Unpaid only
GET http://localhost:5001/api/v1/wages/wages?isPaid=false
Authorization: Bearer <token>

# Paid only
GET http://localhost:5001/api/v1/wages/wages?isPaid=true
Authorization: Bearer <token>
```

### 11. Pay Wages
```bash
POST http://localhost:5001/api/v1/wages/wages/pay
Authorization: Bearer <token>
Content-Type: application/json

{
  "wageIds": ["wage-uuid-1", "wage-uuid-2", "wage-uuid-3"],
  "paymentDate": "2026-03-05"
}
```

**What Happens:**
1. Marks DailyWage records as isPaid = true
2. Creates WorkerAdvance records with type "ADJUSTED" for each advance deduction
3. Updates Worker.advanceBalance (reduces by advanceUsed amount)
4. Creates CashEntry for each wage (DEBIT, category: "WAGE", amount: netPayable)

### 12. Get Wage Summary
```bash
GET http://localhost:5001/api/v1/wages/wages/summary?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

**Expected Response:**
```json
{
  "success": true,
  "data": {
    "totalWages": 125000,
    "totalAdvanceUsed": 15000,
    "totalNetPayable": 110000,
    "totalPaid": 85000,
    "totalPending": 25000,
    "paidCount": 180,
    "pendingCount": 45,
    "totalRecords": 225
  }
}
```

### 13. Delete Unpaid Wage (if mistake)
```bash
DELETE http://localhost:5001/api/v1/wages/wages/{wageId}
Authorization: Bearer <token>
```

**Note:** Can only delete unpaid wages

## Error Scenarios

### 1. Duplicate Attendance
```bash
# Mark same worker attendance twice on same date
# Result: Updates existing record (upsert)
```

### 2. Advance to Manager
```bash
POST http://localhost:5001/api/v1/wages/workers/{managerId}/advance
{
  "amount": 500
}

# Response:
{
  "success": false,
  "message": "MANAGER cannot receive advance"
}
```

### 3. Calculate Wages Twice
```bash
# Calculate wages for same date twice
# Response:
{
  "success": false,
  "message": "Wages already calculated for this date"
}
```

### 4. Pay Already Paid Wages
```bash
POST http://localhost:5001/api/v1/wages/wages/pay
{
  "wageIds": ["already-paid-wage-id"]
}

# Response:
{
  "success": false,
  "message": "Some wages are already paid: Raju, Mohan"
}
```

### 5. Delete Paid Wage
```bash
DELETE http://localhost:5001/api/v1/wages/wages/{paid-wage-id}

# Response:
{
  "success": false,
  "message": "Cannot delete paid wage record"
}
```

## Integration Testing Flow

### Complete Daily Workflow
```bash
# Step 1: Mark attendance for all workers
POST /wages/attendance/bulk
{
  "records": [...]
}

# Step 2: Record production (use existing production API)
POST /production
{
  "date": "2026-03-05",
  "machineId": "...",
  "shift": "DAY",
  "brickTypeId": "...",
  "quantity": 3000,
  "workers": [
    { "workerId": "...", "quantity": 1200 },
    { "workerId": "...", "quantity": 1800 }
  ]
}

# Step 3: Calculate wages at end of day
POST /wages/wages/calculate?date=2026-03-05

# Step 4: Review calculated wages
GET /wages/wages?date=2026-03-05&isPaid=false

# Step 5: Pay all wages
POST /wages/wages/pay
{
  "wageIds": ["all-unpaid-wage-ids"],
  "paymentDate": "2026-03-05"
}

# Step 6: Verify cash book entries created
GET /cash?date=2026-03-05&type=DEBIT

# Step 7: Check worker advance balance updated
GET /workers/{workerId}/advance-balance
```

## Verification Queries

### Check Cash Book Impact
```bash
# Should see DEBIT entries for:
# - Advances given
# - Wages paid (net payable amounts)

GET http://localhost:5001/api/v1/cash?date=2026-03-05&type=DEBIT
```

### Check Worker Advance Balance
```bash
# Before: 500
# Give advance: +300 = 800
# Pay wage with auto-adjust: -500 = 300

GET http://localhost:5001/api/v1/wages/workers/{workerId}/advance-balance
```

### Check Production Integration
```bash
# Verify brick counts match between production and wage calculation

GET http://localhost:5001/api/v1/production?date=2026-03-05
GET http://localhost:5001/api/v1/wages/wages?date=2026-03-05
```

## Notes
- All endpoints require authentication
- Use admin token for testing
- Worker IDs must exist in database
- Production data must exist before calculating wages
- Attendance should be marked before calculating daily wages
- Monthly payment type workers are automatically excluded
