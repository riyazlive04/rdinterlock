import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';
import { CreateExpenseInput, UpdateExpenseInput } from './expenses.validation';

export class ExpensesService {
  async createExpense(data: CreateExpenseInput) {
    // If workerId is provided, validate worker exists
    if (data.workerId) {
      const worker = await prisma.worker.findUnique({
        where: { id: data.workerId },
      });

      if (!worker) {
        throw new AppError('Worker not found', 404);
      }
    }

    // If materialId is provided, validate material exists
    if (data.materialId) {
      const material = await prisma.rawMaterial.findUnique({
        where: { id: data.materialId },
      });

      if (!material) {
        throw new AppError('Material not found', 404);
      }

      if (!material.isActive) {
        throw new AppError('Material is not active', 400);
      }

      // For material expenses, require quantity and pricePerUnit
      if (data.category === 'MATERIAL') {
        if (!data.quantity || !data.pricePerUnit) {
          throw new AppError(
            'For material expenses, quantity and pricePerUnit are required',
            400
          );
        }
      }
    }

    // Use transaction for material expenses
    if (data.category === 'MATERIAL' && data.materialId && data.quantity && data.pricePerUnit) {
      return await prisma.$transaction(async (tx: any) => {
        // Create expense
        const expense = await tx.expense.create({
          data: {
            date: new Date(data.date),
            category: data.category,
            amount: data.amount,
            notes: data.notes,
            workerId: data.workerId,
            paymentMode: data.paymentMode,
            materialId: data.materialId,
          },
          include: {
            worker: data.workerId
              ? {
                  select: {
                    id: true,
                    name: true,
                  },
                }
              : false,
            material: data.materialId
              ? {
                  select: {
                    id: true,
                    name: true,
                    unit: true,
                  },
                }
              : false,
          },
        });

        // Create material usage record
        const materialUsage = await tx.materialUsage.create({
          data: {
            materialId: data.materialId,
            expenseId: expense.id,
            quantity: data.quantity!,
            pricePerUnit: data.pricePerUnit!,
            totalCost: data.quantity! * data.pricePerUnit!,
            date: new Date(data.date),
          },
        });

        return { ...expense, materialUsage };
      });
    }

    // Regular expense without material tracking
    const expense = await prisma.expense.create({
      data: {
        date: new Date(data.date),
        category: data.category,
        amount: data.amount,
        notes: data.notes,
        workerId: data.workerId,
        paymentMode: data.paymentMode,
        materialId: data.materialId,
      },
      include: {
        worker: data.workerId
          ? {
              select: {
                id: true,
                name: true,
              },
            }
          : false,
        material: data.materialId
          ? {
              select: {
                id: true,
                name: true,
                unit: true,
              },
            }
          : false,
      },
    });

    return expense;
  }

  async getExpenses(
    startDate?: string,
    endDate?: string,
    category?: string,
    workerId?: string
  ) {
    const where: any = {};

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    if (category) {
      where.category = category;
    }

    if (workerId) {
      where.workerId = workerId;
    }

    const expenses = await prisma.expense.findMany({
      where,
      include: {
        worker: {
          select: {
            id: true,
            name: true,
          },
        },
        material: {
          select: {
            id: true,
            name: true,
            unit: true,
          },
        },
        materialUsage: true,
      },
      orderBy: { date: 'desc' },
    });

    return expenses;
  }

  async getExpenseById(id: string) {
    const expense = await prisma.expense.findUnique({
      where: { id },
      include: {
        worker: {
          select: {
            id: true,
            name: true,
          },
        },
        material: {
          select: {
            id: true,
            name: true,
            unit: true,
          },
        },
        materialUsage: true,
      },
    });

    if (!expense) {
      throw new AppError('Expense not found', 404);
    }

    return expense;
  }

  async updateExpense(id: string, data: UpdateExpenseInput) {
    const expense = await prisma.expense.findUnique({
      where: { id },
    });

    if (!expense) {
      throw new AppError('Expense not found', 404);
    }

    const updated = await prisma.expense.update({
      where: { id },
      data,
      include: {
        worker: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return updated;
  }

  async deleteExpense(id: string) {
    const expense = await prisma.expense.findUnique({
      where: { id },
    });

    if (!expense) {
      throw new AppError('Expense not found', 404);
    }

    await prisma.expense.delete({
      where: { id },
    });

    return { message: 'Expense deleted successfully' };
  }

  async getExpensesSummary(startDate?: string, endDate?: string) {
    const where: any = {};

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const expenses = await prisma.expense.findMany({
      where,
    });

    const totalAmount = expenses.reduce((sum: number, e: any) => sum + e.amount, 0);

    // Group by category
    const byCategory: any = {};
    expenses.forEach((e: any) => {
      if (!byCategory[e.category]) {
        byCategory[e.category] = 0;
      }
      byCategory[e.category] += e.amount;
    });

    return {
      totalExpenses: expenses.length,
      totalAmount,
      byCategory,
    };
  }
}
