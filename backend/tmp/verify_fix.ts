
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test(category: string) {
    console.log(`\nTesting category: "${category}"`);
    const where: any = {
        category: {
            equals: category,
            mode: 'insensitive'
        }
    };

    const entries = await (prisma.cashEntry as any).findMany({
        where,
        select: { id: true, category: true, amount: true }
    });

    console.log(`Found ${entries.length} entries.`);
    entries.forEach((e: any) => console.log(`- ${e.category}: ${e.amount}`));
}

async function main() {
    await test('Food');
    await test('FOOD');
    await test('food');
    await test('Material');
    await test('MATERIAL');
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
