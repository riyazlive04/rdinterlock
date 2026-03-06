import prisma from '../config/database';

async function migrateExpenses() {
    console.log('🚀 Starting expense migration...');

    const expenses = await prisma.expense.findMany();
    console.log(`Found ${expenses.length} expenses to migrate.`);

    let migratedCount = 0;
    for (const expense of expenses) {
        // Check if already migrated (optional, based on description/amount/date)
        const existing = await (prisma.cashEntry as any).findFirst({
            where: {
                date: expense.date,
                amount: expense.amount,
                type: 'DEBIT',
                category: expense.category
            } as any
        });

        if (!existing) {
            await (prisma.cashEntry as any).create({
                data: {
                    date: expense.date,
                    type: 'DEBIT',
                    amount: expense.amount,
                    description: expense.notes || `Migrated expense: ${expense.category}`,
                    category: expense.category,
                    paymentMode: (expense as any).paymentMode,
                    workerId: (expense as any).workerId,
                    materialId: (expense as any).materialId,
                } as any
            });
            migratedCount++;
        }
    }

    console.log(`✅ Migration complete. Migrated ${migratedCount} new entries.`);
}

migrateExpenses()
    .catch(e => {
        console.error('❌ Migration failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
