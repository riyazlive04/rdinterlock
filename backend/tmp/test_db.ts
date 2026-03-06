import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    }
});

async function main() {
    console.log('Testing connection to:', process.env.DATABASE_URL?.split('@')[1]);
    try {
        await prisma.$connect();
        console.log('✅ Connection successful!');
        const count = await (prisma as any).cashEntry.count();
        console.log('Cash entries count:', count);
    } catch (error) {
        console.error('❌ Connection failed:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
