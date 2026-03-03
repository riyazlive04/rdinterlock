# RD Interlock Factory Operations System

A comprehensive factory management system for interlock brick manufacturing operations, including production tracking, dispatch management, worker wages, settlements, and raw material tracking.

## 🚀 Features

### Core Modules
- **Production Management** - Track daily production by machine, shift, and brick type
- **Dispatch Management** - Manage orders, deliveries, and customer payments
- **Worker Management** - Track workers with different payment types (Daily, Per-Brick, Monthly)
- **Expense Management** - Record and categorize expenses including material costs
- **Cash Book** - Complete cash flow tracking with credit/debit entries
- **Stock Management** - Real-time inventory tracking by brick type

### Advanced Features
- **Daily Wage System** - Automatic wage calculation based on worker type
  - Attendance tracking (single + bulk operations)
  - Advance management with automatic adjustment
  - Daily wage calculation and payment
- **Settlement Engines** - Automated wage settlements
  - Weekly settlements for production workers (PER_BRICK/DAILY)
  - Monthly salary payments for staff (MANAGER/DRIVER/TELECALLER)
  - One-click bulk payment with automatic advance adjustment
- **Raw Material Tracking** - Track material consumption and costs
  - Material master with 4 default materials
  - Material usage linked to expenses
  - Cost analysis and reporting

### Additional Features
- **Dashboard** - Real-time KPIs and production charts
- **Reports** - Comprehensive reporting system
- **Authentication** - JWT-based secure access
- **Role-based Access** - Admin/Manager/Viewer roles

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js** - REST API server
- **TypeScript** - Type-safe development
- **Prisma ORM** - Database management
- **PostgreSQL** - Production database
- **JWT** - Authentication
- **Zod** - Schema validation

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **React Query** - Data fetching
- **React Router** - Navigation
- **Axios** - HTTP client
- **Recharts** - Data visualization

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "RD Interlock Bricks"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Backend Environment**
   Create `backend/.env`:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5433/rd_interlock"
   PORT=5001
   JWT_SECRET="your-secret-key-here"
   ```

4. **Database Setup**
   ```bash
   cd backend
   npx prisma migrate deploy
   npx prisma generate
   npm run prisma:seed
   ```

5. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

6. **Configure Frontend Environment**
   Create `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5001/api/v1
   ```

## 🚀 Running the Application

### Development Mode

1. **Start Backend** (Terminal 1)
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on http://localhost:5001

2. **Start Frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on http://localhost:8080

### Production Build

1. **Build Backend**
   ```bash
   cd backend
   npm run build
   npm start
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

## 👤 Default Credentials

- **Email**: admin@rdinterlock.com
- **Password**: admin123

## 📊 Database Schema

The system includes 19 database models:
- User, Worker, Machine, BrickType, Customer
- Production, ProductionWorker, Dispatch
- Expense, CashEntry, Stock
- Attendance, DailyWage, WorkerAdvance
- WeeklySettlement, MonthlySettlement
- RawMaterial, MaterialUsage

See [SETTLEMENT_SYSTEM_SUMMARY.md](SETTLEMENT_SYSTEM_SUMMARY.md) and [WAGE_SYSTEM_SUMMARY.md](WAGE_SYSTEM_SUMMARY.md) for detailed documentation.

## 📚 API Documentation

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration

### Settlement APIs (10 endpoints)
- Weekly settlements: calculate, save, view, pay
- Monthly salaries: calculate, save, view, pay

### Material APIs (8 endpoints)
- Material CRUD operations
- Usage tracking and reporting

### Core APIs
- Workers, Production, Dispatch, Expenses, Cash Book, Stock, Reports

All APIs require JWT authentication (except login/register).

## 🗂️ Project Structure

```
RD Interlock Bricks/
├── backend/
│   ├── prisma/
│   │   ├── migrations/        # Database migrations
│   │   ├── schema.prisma      # Database schema
│   │   └── seed.ts            # Seed data
│   ├── src/
│   │   ├── config/            # Configuration
│   │   ├── middleware/        # Auth, error handling
│   │   ├── modules/           # Feature modules
│   │   │   ├── auth/
│   │   │   ├── workers/
│   │   │   ├── production/
│   │   │   ├── dispatch/
│   │   │   ├── expenses/
│   │   │   ├── cashbook/
│   │   │   ├── stock/
│   │   │   ├── reports/
│   │   │   ├── settings/
│   │   │   ├── wages/         # Daily wage system
│   │   │   ├── settlements/   # Settlement engines
│   │   │   └── materials/     # Material tracking
│   │   ├── routes.ts
│   │   └── server.ts
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── api/               # API clients
│   │   ├── components/        # Reusable components
│   │   ├── pages/             # Page components
│   │   ├── types/             # TypeScript types
│   │   └── App.tsx
│   └── package.json
├── SETTLEMENT_SYSTEM_SUMMARY.md
├── WAGE_SYSTEM_SUMMARY.md
└── README.md
```

## 🔑 Key Features Detail

### Wage Management System
- **Attendance Tracking**: Mark attendance for workers (single or bulk)
- **Advance Management**: Give/adjust advances with role restrictions
- **Wage Calculation**: Automatic calculation by payment type
  - PER_BRICK: bricks × rate
  - DAILY: rate if present
  - MONTHLY: excluded from daily wages
- **Wage Payment**: Pay with automatic advance adjustment
- **Cash Book Integration**: All payments create cash entries

### Settlement System
- **Weekly Settlements**: 
  - Aggregates daily wages Monday-Sunday
  - Automatic advance deduction
  - Bulk payment functionality
  - Cash book integration
- **Monthly Salaries**:
  - Fixed salary for staff roles
  - Automatic advance adjustment
  - One-click payment processing
  - Cash book integration

### Material Tracking
- **Material Master**: Manage materials with units and descriptions
- **Usage Tracking**: Link material consumption to expenses
- **Cost Analysis**: View usage history and cost summaries
- **Default Materials**: Crusher Powder, Fly Ash, Cement, Add Mixture

## 📱 Screenshots

The system features a modern, mobile-first UI with:
- Real-time dashboard with KPIs
- Production tracking forms
- Worker management interface
- Settlement calculation screens
- Material management pages

## 🧪 Testing

### Backend API Testing
```bash
# Health check
curl http://localhost:5001/api/v1/health

# Login
curl -X POST http://localhost:5001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@rdinterlock.com","password":"admin123"}'
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

ISC License

## 👨‍💻 Author

Sirah Digital - AI Automation

## 📝 Notes

- Backend runs on port 5001 (changed from 5000 due to conflicts)
- Frontend runs on port 8080
- PostgreSQL runs on port 5433
- All existing APIs remain unchanged (backward compatible)
- Complete audit trail for all transactions
- Transaction-based operations for data integrity

## 🔮 Future Enhancements

- Email notifications for settlements
- Material inventory integration
- Budget forecasting
- Automatic settlement scheduling
- Mobile app
- Advanced analytics and reporting

---

**Last Updated**: March 3, 2026  
**Version**: 1.0.0  
**Status**: Production Ready
