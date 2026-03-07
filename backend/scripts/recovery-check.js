const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

// This script attempts to use the existing Prisma client but pointed at the local SQLite file
// to see if any data exists there.

async function checkLocalData() {
    console.log('--- EMERGENCY DATA RECOVERY ---\n');

    const dbPath = path.join(__dirname, '..', 'prisma', 'dev.db');
    if (!fs.existsSync(dbPath)) {
        console.error('❌ dev.db not found at ' + dbPath);
        return;
    }

    console.log('📂 Found dev.db. Size: ' + fs.statSync(dbPath).size + ' bytes');

    // We use a separate Prisma instance for the local file
    const localPrisma = new PrismaClient({
        datasources: {
            db: {
                url: 'file:./dev.db'
            }
        }
    });

    try {
        await localPrisma.$connect();

        const counts = {
            users: await localPrisma.user.count().catch(() => 0),
            customers: await localPrisma.customer.count().catch(() => 0),
            workers: await localPrisma.worker.count().catch(() => 0),
            dispatches: await localPrisma.dispatch.count().catch(() => 0),
            productions: await localPrisma.production.count().catch(() => 0),
            expenses: await localPrisma.expense.count().catch(() => 0),
        };

        console.log('\n📊 Data snapshot in dev.db:');
        console.table(counts);

        if (counts.customers > 0) {
            console.log('\n👥 Samples - Customers:');
            const samples = await localPrisma.customer.findMany({ take: 5 });
            console.table(samples.map(c => ({ name: c.name, phone: c.phone || 'N/A' })));
        }

        if (counts.workers > 0) {
            console.log('\n👷 Samples - Workers:');
            const samples = await localPrisma.worker.findMany({ take: 5 });
            console.table(samples.map(w => ({ name: w.name, role: w.role })));
        }

    } catch (err) {
        console.error('\n❌ Error reading dev.db:', err.message);
        console.log('Note: This might be due to schema mismatch or if the file is not a valid SQLite DB.');
    } finally {
        await localPrisma.$disconnect();
    }
}

checkLocalData();
