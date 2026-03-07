-- AlterTable
ALTER TABLE "client_payments" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'PAYMENT';

-- AlterTable
ALTER TABLE "dispatches" ADD COLUMN     "driverId" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Completed',
ADD COLUMN     "vehicleNumber" TEXT,
ALTER COLUMN "transportCost" SET DEFAULT 0,
ALTER COLUMN "loadingCost" SET DEFAULT 0,
ALTER COLUMN "totalAmount" SET DEFAULT 0,
ALTER COLUMN "paidAmount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "productions" ADD COLUMN     "availableBricks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "damagedBricks" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "workers" ADD COLUMN     "employeeType" TEXT NOT NULL DEFAULT 'Worker',
ADD COLUMN     "monthlySalary" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "perBrickRate" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "weeklyWage" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "rate" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "dispatches" ADD CONSTRAINT "dispatches_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "workers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
