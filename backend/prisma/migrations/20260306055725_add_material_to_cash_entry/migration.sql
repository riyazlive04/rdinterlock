-- AlterTable
ALTER TABLE "cash_entries" ADD COLUMN     "materialId" TEXT;

-- AddForeignKey
ALTER TABLE "cash_entries" ADD CONSTRAINT "cash_entries_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "raw_materials"("id") ON DELETE SET NULL ON UPDATE CASCADE;
