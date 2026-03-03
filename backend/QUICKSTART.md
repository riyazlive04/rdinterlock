# 🚀 Quick Start Guide - RD Interlock Backend

Get the backend API running in 5 minutes!

## Prerequisites

- **Node.js** (v18+) - [Download here](https://nodejs.org/)
- **PostgreSQL** (v14+) - [Download here](https://www.postgresql.org/download/)

## Step-by-Step Setup

### 1. Navigate to Backend Directory

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including Express, Prisma, TypeScript, and more.

### 3. Set Up PostgreSQL Database

Create a new database in PostgreSQL:

```sql
CREATE DATABASE rd_interlock;
```

Or use pgAdmin or any PostgreSQL client to create the database.

### 4. Configure Environment Variables

The `.env` file is already created. Update it with your database credentials:

```env
PORT=5000
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/rd_interlock?schema=public"
JWT_SECRET=your_super_secret_jwt_key_change_this
NODE_ENV=development
```

**Replace:**
- `YOUR_USERNAME` - Your PostgreSQL username (usually `postgres`)
- `YOUR_PASSWORD` - Your PostgreSQL password

### 5. Generate Prisma Client

```bash
npm run prisma:generate
```

### 6. Run Database Migrations

This will create all tables in your database:

```bash
npm run prisma:migrate
```

When prompted for a migration name, you can use: `init`

### 7. Seed the Database (Optional but Recommended)

This will add sample data including an admin user:

```bash
npm run prisma:seed
```

**Admin Credentials Created:**
- Email: `admin@rdinterlock.com`
- Password: `admin123`

### 8. Start the Development Server

```bash
npm run dev
```

You should see:

```
🚀 RD Interlock Factory Operations API
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server running on port 5000
🌍 Environment: development
🔗 API URL: http://localhost:5000/api/v1
📊 Health Check: http://localhost:5000/api/v1/health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🧪 Test the API

### Check Health Status

Open your browser or use curl:

```bash
curl http://localhost:5000/api/v1/health
```

### Login with Admin Account

```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@rdinterlock.com",
    "password": "admin123"
  }'
```

You'll receive a token. Copy it for use in other requests.

### Get Dashboard Summary

```bash
curl http://localhost:5000/api/v1/dashboard/summary \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 📊 View Database (Optional)

Open Prisma Studio to view and edit your database:

```bash
npm run prisma:studio
```

This opens a web interface at `http://localhost:5555`

## 🎯 What's Next?

1. **Explore the API** - Check `API_DOCS.md` for all endpoints
2. **Test with Postman** - Import the endpoints and test
3. **Connect Frontend** - Use the API URL in your React app
4. **Create More Users** - Register additional users with different roles

## 🔧 Useful Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run prisma:studio` | Open database GUI |
| `npm run prisma:migrate` | Create/apply migrations |
| `npm run prisma:seed` | Seed database with sample data |

## ❓ Troubleshooting

### Database Connection Failed

**Error:** `Can't reach database server`

**Solution:**
1. Make sure PostgreSQL is running
2. Check your DATABASE_URL in `.env`
3. Verify database exists: `SELECT datname FROM pg_database;`

### Port Already in Use

**Error:** `Port 5000 is already in use`

**Solution:**
1. Change PORT in `.env` to another port (e.g., 5001)
2. Or kill the process using port 5000

### Prisma Client Not Generated

**Error:** `Cannot find module '@prisma/client'`

**Solution:**
```bash
npm run prisma:generate
```

### Migration Failed

**Error:** `Migration failed to apply`

**Solution:**
1. Drop the database and recreate it
2. Run migrations again
3. Or reset: `npx prisma migrate reset`

## 📞 Need Help?

- Check the main `README.md` for detailed documentation
- Review `API_DOCS.md` for API examples
- Check Prisma logs in the console

## 🎉 Success!

If you see the server running and can access the health endpoint, you're all set! The backend is ready to use.

---

**Next Steps:**
1. Test all API endpoints
2. Connect your frontend application
3. Start building features!

Happy Coding! 🚀
