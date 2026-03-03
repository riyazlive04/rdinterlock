import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';
import { CreateCashEntryInput, UpdateCashEntryInput } from './cashbook.validation';

export class CashbookService {
  async createCashEntry(data: CreateCashEntryInput) {
    const cashEntry = await prisma.cashEntry.create({
      data: {
        date: new Date(data.date),
        type: data.type,
        amount: data.amount,
        description: data.description,
        category: data.category,
      },
    });

    return cashEntry;
  }

  async getCashEntries(
    startDate?: string,
    endDate?: string,
    type?: string,
    category?: string
  ) {
    const where: any = {};

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    if (type) {
      where.type = type;
    }

    if (category) {
      where.category = category;
    }

    const entries = await prisma.cashEntry.findMany({
      where,
      orderBy: { date: 'desc' },
    });

    return entries;
  }

  async getCashEntryById(id: string) {
    const entry = await prisma.cashEntry.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new AppError('Cash entry not found', 404);
    }

    return entry;
  }

  async updateCashEntry(id: string, data: UpdateCashEntryInput) {
    const entry = await prisma.cashEntry.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new AppError('Cash entry not found', 404);
    }

    const updated = await prisma.cashEntry.update({
      where: { id },
      data,
    });

    return updated;
  }

  async deleteCashEntry(id: string) {
    const entry = await prisma.cashEntry.findUnique({
      where: { id },
    });

    if (!entry) {
      throw new AppError('Cash entry not found', 404);
    }

    await prisma.cashEntry.delete({
      where: { id },
    });

    return { message: 'Cash entry deleted successfully' };
  }

  async getCashBalance(startDate?: string, endDate?: string) {
    const where: any = {};

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const entries = await prisma.cashEntry.findMany({
      where,
    });

    let totalCredit = 0;
    let totalDebit = 0;

    entries.forEach((entry: any) => {
      if (entry.type === 'CREDIT') {
        totalCredit += entry.amount;
      } else {
        totalDebit += entry.amount;
      }
    });

    const balance = totalCredit - totalDebit;

    return {
      totalCredit,
      totalDebit,
      balance,
      totalEntries: entries.length,
    };
  }
}
