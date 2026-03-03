-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "materialId" TEXT;

-- CreateTable
CREATE TABLE "weekly_settlements" (
    "id" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "weekStart" TIMESTAMP(3) NOT NULL,
    "weekEnd" TIMESTAMP(3) NOT NULL,
    "totalWage" DOUBLE PRECISION NOT NULL,
    "advanceUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netPaid" DOUBLE PRECISION NOT NULL,
    "isSettled" BOOLEAN NOT NULL DEFAULT false,
    "settledAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "weekly_settlements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monthly_settlements" (
    "id" TEXT NOT NULL,
    "workerId" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "advanceUsed" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "netPaid" DOUBLE PRECISION NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paidAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "monthly_settlements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raw_materials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "raw_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "material_usages" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "quantity" DOUBLE PRECISION,
    "expenseId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "material_usages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "weekly_settlements_workerId_idx" ON "weekly_settlements"("workerId");

-- CreateIndex
CREATE INDEX "weekly_settlements_weekStart_idx" ON "weekly_settlements"("weekStart");

-- CreateIndex
CREATE INDEX "weekly_settlements_isSettled_idx" ON "weekly_settlements"("isSettled");

-- CreateIndex
CREATE UNIQUE INDEX "weekly_settlements_workerId_weekStart_key" ON "weekly_settlements"("workerId", "weekStart");

-- CreateIndex
CREATE INDEX "monthly_settlements_workerId_idx" ON "monthly_settlements"("workerId");

-- CreateIndex
CREATE INDEX "monthly_settlements_month_year_idx" ON "monthly_settlements"("month", "year");

-- CreateIndex
CREATE INDEX "monthly_settlements_isPaid_idx" ON "monthly_settlements"("isPaid");

-- CreateIndex
CREATE UNIQUE INDEX "monthly_settlements_workerId_month_year_key" ON "monthly_settlements"("workerId", "month", "year");

-- CreateIndex
CREATE UNIQUE INDEX "raw_materials_name_key" ON "raw_materials"("name");

-- CreateIndex
CREATE INDEX "material_usages_materialId_idx" ON "material_usages"("materialId");

-- CreateIndex
CREATE INDEX "material_usages_date_idx" ON "material_usages"("date");

-- CreateIndex
CREATE INDEX "material_usages_expenseId_idx" ON "material_usages"("expenseId");

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "raw_materials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "weekly_settlements" ADD CONSTRAINT "weekly_settlements_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "workers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "monthly_settlements" ADD CONSTRAINT "monthly_settlements_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "workers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_usages" ADD CONSTRAINT "material_usages_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "raw_materials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "material_usages" ADD CONSTRAINT "material_usages_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "expenses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
