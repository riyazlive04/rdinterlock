const { PrismaClient: RecoveryPrisma } = require('../prisma/recovery-client');
const fs = require('fs');
const path = require('path');

async function checkLocalData() {
    console.log('--- EMERGENCY DATA RECOVERY (SQLITE) ---\n');

    // Check if recovery client was generated
    const clientPath = path.join(__dirname, '..', 'prisma', 'recovery-client');
    if (!fs.existsSync(clientPath)) {
        console.error('❌ recovery-client not found at ' + clientPath + '. Please run: npx prisma generate --schema prisma/recovery.prisma');
        return;
    }

    const localPrisma = new RecoveryPrisma();

    try {
        await localPrisma.$connect();

        console.log('✅ Connected to local SQLite database.\n');

        const tables = [
            'users', 'machines', 'brick_types', 'customers', 'workers',
            'productions', 'dispatches', 'expenses', 'cash_entries',
            'attendance', 'daily_wages', 'worker_advances'
        ];

        for (const table of tables) {
            try {
                const count = await localPrisma[table].count();
                console.log(`📊 ${table.padEnd(20)}: ${count} records`);
                if (count > 0) {
                    const samples = await localPrisma[table].findMany({ take: 3 });
                    console.log(`   Sample: ${JSON.stringify(samples[0]).substring(0, 100)}...`);
                }
            } catch (e) {
                // Table might not exist in this client
            }
        }

    } catch (err) {
        console.error('\n❌ Error reading dev.db:', err.message);
    } finally {
        await localPrisma.$disconnect();
    }
}

checkLocalData();
