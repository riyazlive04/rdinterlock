const { PrismaClient: MainPrisma } = require('@prisma/client');
const { PrismaClient: RecoveryPrisma } = require('../prisma/recovery-client');

async function migrate() {
    console.log('--- STARTING RESTORATION ---');

    const recovery = new RecoveryPrisma();
    const main = new MainPrisma();

    try {
        await recovery.$connect();
        await main.$connect();

        // 1. Users
        console.log('👤 Migrating Users...');
        const users = await recovery.users.findMany();
        for (const u of users) {
            await main.user.upsert({
                where: { email: u.email },
                update: {},
                create: { ...u }
            });
        }

        // 2. Machines
        console.log('⚙️ Migrating Machines...');
        const machines = await recovery.machines.findMany();
        for (const m of machines) {
            await main.machine.upsert({
                where: { id: m.id },
                update: {},
                create: { ...m }
            });
        }

        // 3. Brick Types
        console.log('🧱 Migrating Brick Types...');
        const brickTypes = await recovery.brick_types.findMany();
        for (const b of brickTypes) {
            await main.brickType.upsert({
                where: { id: b.id },
                update: {},
                create: { ...b }
            });
        }

        // 4. Customers
        console.log('👥 Migrating Customers...');
        const customers = await recovery.customers.findMany();
        for (const c of customers) {
            await main.customer.upsert({
                where: { id: c.id },
                update: {},
                create: { ...c }
            });
        }

        // 5. Workers
        console.log('👷 Migrating Workers...');
        const workers = await recovery.workers.findMany();
        for (const w of workers) {
            const { ...data } = w;
            await main.worker.upsert({
                where: { id: w.id },
                update: {},
                create: {
                    ...data,
                    employeeType: 'Worker' // Default for recovered data
                }
            });
        }

        // 6. Raw Materials
        console.log('💎 Migrating Raw Materials...');
        const rawMaterials = await recovery.raw_materials.findMany();
        for (const r of rawMaterials) {
            await main.rawMaterial.upsert({
                where: { id: r.id },
                update: {},
                create: { ...r }
            });
        }

        // 7. Productions
        console.log('🏭 Migrating Productions...');
        const productions = await recovery.productions.findMany();
        for (const p of productions) {
            await main.production.upsert({
                where: { id: p.id },
                update: {},
                create: {
                    ...p,
                    damagedBricks: 0,
                    availableBricks: p.quantity
                }
            });
        }

        // 8. Dispatches
        console.log('🚚 Migrating Dispatches...');
        const dispatches = await recovery.dispatches.findMany();
        for (const d of dispatches) {
            await main.dispatch.upsert({
                where: { id: d.id },
                update: {},
                create: {
                    ...d,
                    status: 'Completed'
                }
            });
        }

        // 9. Expenses
        console.log('💸 Migrating Expenses...');
        const expenses = await recovery.expenses.findMany();
        for (const e of expenses) {
            await main.expense.upsert({
                where: { id: e.id },
                update: {},
                create: { ...e }
            });
        }

        // 10. Material Usages
        console.log('🧪 Migrating Material Usages...');
        const usages = await recovery.material_usages.findMany();
        for (const u of usages) {
            await main.materialUsage.upsert({
                where: { id: u.id },
                update: {},
                create: { ...u }
            });
        }

        // 11. Attendance
        console.log('📅 Migrating Attendance...');
        const attendance = await recovery.attendance.findMany();
        for (const a of attendance) {
            await main.attendance.upsert({
                where: { id: a.id },
                update: {},
                create: { ...a }
            });
        }

        // 12. Daily Wages
        console.log('💰 Migrating Daily Wages...');
        const wages = await recovery.daily_wages.findMany();
        for (const w of wages) {
            await main.dailyWage.upsert({
                where: { id: w.id },
                update: {},
                create: { ...w }
            });
        }

        // 13. Worker Advances
        console.log('💵 Migrating Worker Advances...');
        const advances = await recovery.worker_advances.findMany();
        for (const a of advances) {
            await main.workerAdvance.upsert({
                where: { id: a.id },
                update: {},
                create: { ...a }
            });
        }

        // 14. Production Workers
        console.log('🤝 Migrating Production Workers...');
        const pWorkers = await recovery.production_workers.findMany();
        for (const pw of pWorkers) {
            await main.productionWorker.upsert({
                where: { id: pw.id },
                update: {},
                create: { ...pw }
            });
        }

        // 15. Weekly Settlements
        console.log('📆 Migrating Weekly Settlements...');
        const settlements = await recovery.weekly_settlements.findMany();
        for (const s of settlements) {
            await main.weeklySettlement.upsert({
                where: { id: s.id },
                update: {},
                create: { ...s }
            });
        }

        // 16. Cash Entries
        console.log('🏧 Migrating Cash Entries...');
        const cashEntries = await recovery.cash_entries.findMany();
        for (const ce of cashEntries) {
            await main.cashEntry.upsert({
                where: { id: ce.id },
                update: {},
                create: { ...ce }
            });
        }

        console.log('\n✅ RESTORATION COMPLETE!');

    } catch (err) {
        console.error('❌ Migration failed:', err);
    } finally {
        await recovery.$disconnect();
        await main.$disconnect();
    }
}

migrate();
