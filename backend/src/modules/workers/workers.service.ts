import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';
import { CreateWorkerInput, UpdateWorkerInput } from './workers.validation';

export class WorkersService {
  async createWorker(data: CreateWorkerInput) {
    const worker = await prisma.worker.create({
      data,
    });

    return worker;
  }

  async getAllWorkers(activeOnly: boolean = false) {
    const workers = await prisma.worker.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { name: 'asc' },
    });

    return workers;
  }

  async getWorkerById(id: string) {
    const worker = await prisma.worker.findUnique({
      where: { id },
      include: {
        productionWorkers: {
          include: {
            production: {
              select: {
                date: true,
                shift: true,
                brickType: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
      },
    });

    if (!worker) {
      throw new AppError('Worker not found', 404);
    }

    return worker;
  }

  async updateWorker(id: string, data: UpdateWorkerInput) {
    const worker = await prisma.worker.findUnique({
      where: { id },
    });

    if (!worker) {
      throw new AppError('Worker not found', 404);
    }

    const updatedWorker = await prisma.worker.update({
      where: { id },
      data,
    });

    return updatedWorker;
  }

  async deleteWorker(id: string) {
    const worker = await prisma.worker.findUnique({
      where: { id },
    });

    if (!worker) {
      throw new AppError('Worker not found', 404);
    }

    // Soft delete
    await prisma.worker.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'Worker deactivated successfully' };
  }

  async getWorkerStats(workerId: string, startDate?: Date, endDate?: Date) {
    const whereClause: any = {
      workerId,
    };

    if (startDate && endDate) {
      whereClause.production = {
        date: {
          gte: startDate,
          lte: endDate,
        },
      };
    }

    const productions = await prisma.productionWorker.findMany({
      where: whereClause,
      include: {
        production: {
          select: {
            date: true,
            shift: true,
            brickType: true,
          },
        },
        worker: true,
      },
    });

    const totalQuantity = productions.reduce((sum: number, p: any) => sum + p.quantity, 0);
    const totalEarnings = productions.reduce((sum: number, p: any) => {
      const rate = p.worker.rate;
      return sum + (p.worker.paymentType === 'PER_BRICK' ? p.quantity * rate : rate);
    }, 0);

    return {
      totalProductions: productions.length,
      totalQuantity,
      totalEarnings,
      productions: productions.slice(0, 20),
    };
  }
}
