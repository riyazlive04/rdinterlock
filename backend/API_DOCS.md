# RD Interlock API Documentation

Base URL: `http://localhost:5000/api/v1`

## Authentication

### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "ADMIN"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "ADMIN"
    },
    "token": "jwt_token_here"
  }
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "admin@rdinterlock.com",
  "password": "admin123"
}
```

---

## Production

### Create Production Entry
```http
POST /production
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2026-03-03",
  "machineId": "machine-uuid",
  "shift": "MORNING",
  "brickTypeId": "brick-type-uuid",
  "quantity": 1000,
  "workers": [
    {
      "workerId": "worker-1-uuid",
      "quantity": 600
    },
    {
      "workerId": "worker-2-uuid",
      "quantity": 400
    }
  ],
  "notes": "Good production day"
}
```

**Shift Options:** `MORNING`, `EVENING`, `NIGHT`

### Get Productions
```http
GET /production?date=2026-03-03&machineId=uuid&shift=MORNING
Authorization: Bearer <token>
```

**Query Parameters:**
- `date` - Filter by specific date
- `startDate` & `endDate` - Date range
- `machineId` - Filter by machine
- `brickTypeId` - Filter by brick type
- `shift` - Filter by shift
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)

### Get Production History
```http
GET /production/history?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

---

## Workers

### Create Worker
```http
POST /workers
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Rajesh Kumar",
  "role": "OPERATOR",
  "paymentType": "DAILY",
  "rate": 500
}
```

**Role Options:** `OPERATOR`, `HELPER`, `LOADER`  
**Payment Type:** `DAILY`, `PER_BRICK`

### Get All Workers
```http
GET /workers?activeOnly=true
Authorization: Bearer <token>
```

### Update Worker
```http
PATCH /workers/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "rate": 550,
  "isActive": true
}
```

### Get Worker Stats
```http
GET /workers/:id/stats?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

---

## Dispatch

### Create Dispatch
```http
POST /dispatch
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2026-03-03",
  "customerId": "customer-uuid",
  "brickTypeId": "brick-type-uuid",
  "quantity": 500,
  "distanceKm": 25.5,
  "vehicleType": "RENT",
  "transportCost": 2000,
  "loadingCost": 500,
  "paymentStatus": "PAID",
  "totalAmount": 15000,
  "paidAmount": 15000,
  "notes": "Delivered on time"
}
```

**Vehicle Type:** `OWN`, `RENT`  
**Payment Status:** `PAID`, `PENDING`, `PARTIAL`

### Get Dispatches
```http
GET /dispatch?startDate=2026-03-01&endDate=2026-03-31&paymentStatus=PENDING
Authorization: Bearer <token>
```

### Update Dispatch (Payment)
```http
PATCH /dispatch/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "paymentStatus": "PAID",
  "paidAmount": 15000
}
```

### Create Customer
```http
POST /dispatch/customers
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "ABC Construction",
  "phone": "9876543210",
  "address": "Mumbai, Maharashtra"
}
```

### Get All Customers
```http
GET /dispatch/customers?activeOnly=true
Authorization: Bearer <token>
```

---

## Expenses

### Create Expense
```http
POST /expenses
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2026-03-03",
  "category": "FUEL",
  "amount": 3000,
  "notes": "Diesel for generators",
  "workerId": "worker-uuid-optional",
  "paymentMode": "CASH"
}
```

**Category:** `FUEL`, `MAINTENANCE`, `SALARY`, `GENERAL`, `OTHER`  
**Payment Mode:** `CASH`, `UPI`, `BANK`

### Get Expenses
```http
GET /expenses?startDate=2026-03-01&endDate=2026-03-31&category=FUEL
Authorization: Bearer <token>
```

### Get Expenses Summary
```http
GET /expenses/summary?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalExpenses": 15,
    "totalAmount": 45000,
    "byCategory": {
      "FUEL": 12000,
      "MAINTENANCE": 8000,
      "SALARY": 20000,
      "GENERAL": 5000
    }
  }
}
```

---

## Cash Book

### Create Cash Entry
```http
POST /cash
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2026-03-03",
  "type": "CREDIT",
  "amount": 50000,
  "description": "Payment received from ABC Construction",
  "category": "SALES"
}
```

**Type:** `CREDIT`, `DEBIT`  
**Category:** `SALES`, `EXPENSE`, `LOAN`, `OTHER`

### Get Cash Entries
```http
GET /cash?startDate=2026-03-01&endDate=2026-03-31&type=CREDIT
Authorization: Bearer <token>
```

### Get Cash Balance
```http
GET /cash/balance?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalCredit": 150000,
    "totalDebit": 85000,
    "balance": 65000,
    "totalEntries": 45
  }
}
```

---

## Stock

### Get Current Stock
```http
GET /stock/current?brickTypeId=uuid
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "brickType": {
        "id": "uuid",
        "size": "4inch"
      },
      "produced": 10000,
      "dispatched": 7000,
      "currentStock": 3000
    }
  ]
}
```

### Get Ready Stock
```http
GET /stock/ready
Authorization: Bearer <token>
```

### Get Stock History
```http
GET /stock/history?startDate=2026-03-01&endDate=2026-03-31&brickTypeId=uuid
Authorization: Bearer <token>
```

---

## Dashboard & Reports

### Dashboard Summary
```http
GET /dashboard/summary
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "todayProduction": {
      "quantity": 5000,
      "count": 3
    },
    "todayDispatch": {
      "quantity": 2000,
      "count": 2
    },
    "todayExpenses": {
      "amount": 8000,
      "count": 5
    },
    "readyStock": [
      {
        "brickType": "4inch",
        "stock": 15000
      }
    ],
    "cashBalance": 250000,
    "pendingPayments": 45000
  }
}
```

### Production Report
```http
GET /reports/production?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

### Dispatch Report
```http
GET /reports/dispatch?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

### Financial Report
```http
GET /reports/financial?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

### Worker Performance Report
```http
GET /reports/workers?startDate=2026-03-01&endDate=2026-03-31
Authorization: Bearer <token>
```

---

## Settings

### Create Machine
```http
POST /settings/machines
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Machine C"
}
```

### Get All Machines
```http
GET /settings/machines?activeOnly=true
Authorization: Bearer <token>
```

### Update Machine
```http
PATCH /settings/machines/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Machine C Updated",
  "isActive": true
}
```

### Create Brick Type
```http
POST /settings/brick-types
Authorization: Bearer <token>
Content-Type: application/json

{
  "size": "10inch"
}
```

### Get All Brick Types
```http
GET /settings/brick-types?activeOnly=true
Authorization: Bearer <token>
```

---

## Error Responses

### Validation Error
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Authentication Error
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

### Not Found Error
```json
{
  "success": false,
  "message": "Worker not found"
}
```

---

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request / Validation Error
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Notes

1. All dates support both ISO format (`2026-03-03T10:00:00Z`) and simple date format (`2026-03-03`)
2. All endpoints except `/auth/register` and `/auth/login` require authentication
3. Stock is calculated dynamically (Production - Dispatch)
4. Multiple workers can be assigned to a single production entry
5. Backdated entries are supported in all modules
6. Soft delete is used for workers, machines, brick types, and customers
