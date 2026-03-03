# RD Interlock - Factory Operations System Backend

A comprehensive backend API for managing brick factory operations including production, workers, dispatch, expenses, and reporting.

## 🧱 Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Type-safe development
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **Prisma ORM** - Database toolkit
- **Zod** - Validation
- **JWT** - Authentication

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── modules/         # Feature modules
│   │   ├── auth/        # Authentication
│   │   ├── workers/     # Worker management
│   │   ├── production/  # Production tracking
│   │   ├── dispatch/    # Dispatch & customers
│   │   ├── expenses/    # Expense management
│   │   ├── cashbook/    # Cash book
│   │   ├── stock/       # Stock calculation (dynamic)
│   │   ├── reports/     # Reports & dashboard
│   │   └── settings/    # Machines & brick types
│   ├── middleware/      # Auth & error handling
│   ├── utils/           # Helper functions
│   ├── routes.ts        # API routes
│   ├── app.ts           # Express app
│   └── server.ts        # Server entry point
├── prisma/
│   └── schema.prisma    # Database schema
├── .env                 # Environment variables
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
cd backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the backend directory:

```env
PORT=5000
DATABASE_URL="postgresql://postgres:password@localhost:5432/rd_interlock?schema=public"
JWT_SECRET=your_jwt_secret_key_change_in_production
NODE_ENV=development
```

4. **Set up the database**

```bash
# Generate Prisma Client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view database
npm run prisma:studio
```

5. **Start the development server**

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## 📊 Database Models

### Core Entities

- **User** - System users with roles
- **Machine** - Production machines
- **BrickType** - Different brick sizes
- **Worker** - Factory workers
- **Production** - Production entries with multiple workers
- **ProductionWorker** - Worker-production mapping
- **Customer** - Dispatch customers
- **Dispatch** - Brick dispatch records
- **Expense** - Factory expenses
- **CashEntry** - Cash book entries
- **Settings** - System settings

## 🔌 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/auth/profile` - Get user profile

### Workers
- `POST /api/v1/workers` - Create worker
- `GET /api/v1/workers` - Get all workers
- `GET /api/v1/workers/:id` - Get worker by ID
- `PATCH /api/v1/workers/:id` - Update worker
- `DELETE /api/v1/workers/:id` - Delete worker
- `GET /api/v1/workers/:id/stats` - Get worker stats

### Production
- `POST /api/v1/production` - Create production entry
- `GET /api/v1/production` - Get productions (with filters)
- `GET /api/v1/production/history` - Get production history
- `GET /api/v1/production/:id` - Get production by ID
- `DELETE /api/v1/production/:id` - Delete production

### Dispatch
- `POST /api/v1/dispatch` - Create dispatch
- `GET /api/v1/dispatch` - Get dispatches (with filters)
- `GET /api/v1/dispatch/:id` - Get dispatch by ID
- `PATCH /api/v1/dispatch/:id` - Update dispatch
- `DELETE /api/v1/dispatch/:id` - Delete dispatch
- `POST /api/v1/dispatch/customers` - Create customer
- `GET /api/v1/dispatch/customers` - Get all customers

### Expenses
- `POST /api/v1/expenses` - Create expense
- `GET /api/v1/expenses` - Get expenses (with filters)
- `GET /api/v1/expenses/summary` - Get expenses summary
- `GET /api/v1/expenses/:id` - Get expense by ID
- `PATCH /api/v1/expenses/:id` - Update expense
- `DELETE /api/v1/expenses/:id` - Delete expense

### Cash Book
- `POST /api/v1/cash` - Create cash entry
- `GET /api/v1/cash` - Get cash entries (with filters)
- `GET /api/v1/cash/balance` - Get cash balance
- `GET /api/v1/cash/:id` - Get cash entry by ID
- `PATCH /api/v1/cash/:id` - Update cash entry
- `DELETE /api/v1/cash/:id` - Delete cash entry

### Stock
- `GET /api/v1/stock/current` - Get current stock (dynamic calculation)
- `GET /api/v1/stock/ready` - Get ready stock
- `GET /api/v1/stock/history` - Get stock history

### Reports & Dashboard
- `GET /api/v1/reports/dashboard` - Dashboard summary
- `GET /api/v1/dashboard/summary` - Dashboard summary (alias)
- `GET /api/v1/reports/production` - Production report
- `GET /api/v1/reports/dispatch` - Dispatch report
- `GET /api/v1/reports/financial` - Financial report
- `GET /api/v1/reports/workers` - Worker performance report

### Settings
- `POST /api/v1/settings/machines` - Create machine
- `GET /api/v1/settings/machines` - Get all machines
- `PATCH /api/v1/settings/machines/:id` - Update machine
- `DELETE /api/v1/settings/machines/:id` - Delete machine
- `POST /api/v1/settings/brick-types` - Create brick type
- `GET /api/v1/settings/brick-types` - Get all brick types
- `PATCH /api/v1/settings/brick-types/:id` - Update brick type
- `DELETE /api/v1/settings/brick-types/:id` - Delete brick type

## 🔐 Authentication

All endpoints except `/auth/register` and `/auth/login` require authentication.

Include the JWT token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## 🧠 Business Logic

### Stock Calculation
Stock is computed dynamically without a stock table:
```
Current Stock = Total Production - Total Dispatch
```

### Worker Production
- Multiple workers can be assigned to a single production entry
- Each worker can have different quantities
- Supports DAILY and PER_BRICK payment types

### Backdated Entries
All modules support custom date input for backdated entries.

### Dispatch Logic
- If `vehicleType = RENT` → `transportCost` is required
- If `vehicleType = OWN` → `transportCost` can be calculated later

## 📦 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run prisma:generate  # Generate Prisma Client
npm run prisma:migrate   # Run database migrations
npm run prisma:studio    # Open Prisma Studio
```

## 🛡️ Error Handling

The API uses centralized error handling with Zod validation. All errors return:

```json
{
  "success": false,
  "message": "Error message",
  "errors": [] // For validation errors
}
```

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| DATABASE_URL | PostgreSQL connection string | - |
| JWT_SECRET | Secret key for JWT | - |
| NODE_ENV | Environment (development/production) | development |

## 🧪 Testing the API

You can test the API using:
- **Postman** or **Insomnia** - Import the endpoints
- **cURL** - Command line testing
- **Frontend Application** - Connect your React app

### Example Request

```bash
# Register a user
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@rdinterlock.com",
    "password": "admin123",
    "role": "ADMIN"
  }'

# Get dashboard summary (requires token)
curl -X GET http://localhost:5000/api/v1/dashboard/summary \
  -H "Authorization: Bearer <your_token>"
```

## 🔄 Database Migrations

When you make changes to the Prisma schema:

```bash
# Create migration
npx prisma migrate dev --name your_migration_name

# Apply migrations to production
npx prisma migrate deploy
```

## 🚀 Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables

3. Run database migrations:
```bash
npm run prisma:migrate
```

4. Start the server:
```bash
npm start
```

## 📞 Support

For issues or questions, please contact the development team.

## 📄 License

Private - All rights reserved

---

**Built with ❤️ for RD Interlock Factory**
