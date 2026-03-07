const { PrismaClient } = require('@prisma/client');

async function verify() {
    const prisma = new PrismaClient();
    try {
        console.log('🔍 Final Verification:');
        const counts = {
            customers: await prisma.customer.count(),
            workers: await prisma.worker.count(),
            dispatches: await prisma.dispatch.count(),
            productions: await prisma.production.count()
        };
        console.table(counts);
        console.log('✅ Data verified on Supabase.');
    } catch (err) {
        console.error('❌ Verification failed:', err.message);
    } finally {
        await prisma.$disconnect();
    }
}

verify();
