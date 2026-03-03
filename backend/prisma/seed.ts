/// <reference types="node" />
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@rdinterlock.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@rdinterlock.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('✅ Created admin user:', adminUser.email);

  // Create machines
  const machine1 = await prisma.machine.create({
    data: { name: 'Machine A' },
  });
  void await prisma.machine.create({
    data: { name: 'Machine B' },
  });
  console.log('✅ Created machines');

  // Create brick types
  const brick4inch = await prisma.brickType.create({
    data: { size: '4inch' },
  });
  void await prisma.brickType.create({
    data: { size: '6inch' },
  });
  void await prisma.brickType.create({
    data: { size: '8inch' },
  });
  console.log('✅ Created brick types');

  // Create workers
  const worker1 = await prisma.worker.create({
    data: {
      name: 'Rajesh Kumar',
      role: 'OPERATOR',
      paymentType: 'DAILY',
      rate: 500,
    },
  });
  const worker2 = await prisma.worker.create({
    data: {
      name: 'Suresh Singh',
      role: 'HELPER',
      paymentType: 'PER_BRICK',
      rate: 0.5,
    },
  });
  void await prisma.worker.create({
    data: {
      name: 'Mahesh Yadav',
      role: 'LOADER',
      paymentType: 'DAILY',
      rate: 400,
    },
  });
  console.log('✅ Created workers');

  // Create customers
  const customer1 = await prisma.customer.create({
    data: {
      name: 'ABC Construction',
      phone: '9876543210',
      address: 'Mumbai, Maharashtra',
    },
  });
  void await prisma.customer.create({
    data: {
      name: 'XYZ Builders',
      phone: '9876543211',
      address: 'Pune, Maharashtra',
    },
  });
  console.log('✅ Created customers');

  // Create sample production entries
  const today = new Date();
  void await prisma.production.create({
    data: {
      date: today,
      machineId: machine1.id,
      shift: 'MORNING',
      brickTypeId: brick4inch.id,
      quantity: 1000,
      workers: {
        create: [
          {
            workerId: worker1.id,
            quantity: 500,
          },
          {
            workerId: worker2.id,
            quantity: 500,
          },
        ],
      },
    },
  });
  console.log('✅ Created sample production');

  // Create sample dispatch
  void await prisma.dispatch.create({
    data: {
      date: today,
      customerId: customer1.id,
      brickTypeId: brick4inch.id,
      quantity: 500,
      distanceKm: 25,
      vehicleType: 'RENT',
      transportCost: 2000,
      loadingCost: 500,
      paymentStatus: 'PAID',
      totalAmount: 15000,
      paidAmount: 15000,
    },
  });
  console.log('✅ Created sample dispatch');

  // Create sample expense
  void await prisma.expense.create({
    data: {
      date: today,
      category: 'FUEL',
      amount: 3000,
      notes: 'Diesel for generators',
      paymentMode: 'CASH',
    },
  });
  console.log('✅ Created sample expense');

  // Create sample cash entries
  void await prisma.cashEntry.create({
    data: {
      date: today,
      type: 'CREDIT',
      amount: 50000,
      description: 'Initial capital',
      category: 'OTHER',
    },
  });
  console.log('✅ Created sample cash entry');

  // Create raw materials
  const materials = [
    {
      name: 'Crusher Powder',
      unit: 'Ton',
      description: 'Fine aggregate for interlock brick production',
    },
    {
      name: 'Fly Ash',
      unit: 'Ton',
      description: 'Pozzolanic material for strength',
    },
    {
      name: 'Cement',
      unit: 'Bag (50kg)',
      description: 'Portland cement for binding',
    },
    {
      name: 'Add Mixture',
      unit: 'Liter',
      description: 'Chemical admixture for workability',
    },
  ];

  for (const material of materials) {
    await prisma.rawMaterial.upsert({
      where: { name: material.name },
      update: {},
      create: material,
    });
  }
  console.log('✅ Created raw materials');

  console.log('');
  console.log('🎉 Database seeding completed successfully!');
  console.log('');
  console.log('📧 Admin credentials:');
  console.log('   Email: admin@rdinterlock.com');
  console.log('   Password: admin123');
  console.log('');
}

main()
  .catch((e: unknown) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
