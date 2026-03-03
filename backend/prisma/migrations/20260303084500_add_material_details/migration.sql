-- AlterTable
ALTER TABLE "raw_materials" ADD COLUMN "unit" TEXT NOT NULL DEFAULT 'Unit',
ADD COLUMN "description" TEXT;

-- AlterTable
ALTER TABLE "material_usages" 
ALTER COLUMN "quantity" SET NOT NULL,
ADD COLUMN "pricePerUnit" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN "totalCost" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "material_usages_expenseId_key" ON "material_usages"("expenseId");

-- Remove default values after setting them for existing rows
ALTER TABLE "raw_materials" ALTER COLUMN "unit" DROP DEFAULT;
ALTER TABLE "material_usages" 
ALTER COLUMN "pricePerUnit" DROP DEFAULT,
ALTER COLUMN "totalCost" DROP DEFAULT;
