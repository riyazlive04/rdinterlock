import prisma from '../../config/database';

export class StockService {
  /**
   * Calculate current stock dynamically (Production - Dispatch)
   * No stock table, computed on-the-fly
   */
  async getCurrentStock(brickTypeId?: string) {
    const brickTypes = brickTypeId
      ? await prisma.brickType.findMany({ where: { id: brickTypeId, isActive: true } })
      : await prisma.brickType.findMany({ where: { isActive: true } });

    const stockData = await Promise.all(
      brickTypes.map(async (brickType: any) => {
        // Total production for this brick type (use availableBricks to exclude damaged ones)
        const totalProduction = await prisma.production.aggregate({
          where: { brickTypeId: brickType.id },
          _sum: { availableBricks: true },
        });

        // Total dispatched for this brick type
        const totalDispatched = await prisma.dispatch.aggregate({
          where: { brickTypeId: brickType.id },
          _sum: { quantity: true },
        });

        const produced = totalProduction._sum.availableBricks || 0;
        const dispatched = totalDispatched._sum.quantity || 0;
        const currentStock = produced - dispatched;

        return {
          brickType: {
            id: brickType.id,
            size: brickType.size,
          },
          produced,
          dispatched,
          currentStock,
        };
      })
    );

    return stockData;
  }

  /**
   * Get stock history over a date range
   */
  async getStockHistory(startDate: string, endDate: string, brickTypeId?: string) {
    const where: any = {};

    if (brickTypeId) {
      where.brickTypeId = brickTypeId;
    }

    const dateRange = {
      gte: new Date(startDate),
      lte: new Date(endDate),
    };

    const [productions, dispatches] = await Promise.all([
      prisma.production.findMany({
        where: {
          ...where,
          date: dateRange,
        },
        include: {
          brickType: true,
        },
        orderBy: { date: 'asc' },
      }),
      prisma.dispatch.findMany({
        where: {
          ...where,
          date: dateRange,
        },
        include: {
          brickType: true,
        },
        orderBy: { date: 'asc' },
      }),
    ]);

    return {
      productions,
      dispatches,
      summary: {
        totalProduced: productions.reduce((sum: number, p: any) => sum + p.availableBricks, 0),
        totalDispatched: dispatches.reduce((sum: number, d: any) => sum + d.quantity, 0),
      },
    };
  }

  /**
   * Get ready stock (produced and not dispatched) - alias for current stock
   */
  async getReadyStock() {
    return this.getCurrentStock();
  }
}
