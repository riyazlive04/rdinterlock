import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';
import { CreateDispatchInput, UpdateDispatchInput, CreateCustomerInput } from './dispatch.validation';

export class DispatchService {
  async createDispatch(data: CreateDispatchInput) {
    // Validate customer exists
    const customer = await prisma.customer.findUnique({
      where: { id: data.customerId },
    });

    if (!customer || !customer.isActive) {
      throw new AppError('Customer not found or inactive', 404);
    }

    // Validate brick type exists
    const brickType = await prisma.brickType.findUnique({
      where: { id: data.brickTypeId },
    });

    if (!brickType || !brickType.isActive) {
      throw new AppError('Brick type not found or inactive', 404);
    }

    // If vehicle type is RENT, transportCost must be provided
    if (data.vehicleType === 'RENT' && (!data.transportCost || data.transportCost === 0)) {
      throw new AppError('Transport cost is required for rented vehicles', 400);
    }

    const dispatch = await prisma.dispatch.create({
      data: {
        date: new Date(data.date),
        customerId: data.customerId,
        brickTypeId: data.brickTypeId,
        quantity: data.quantity,
        distanceKm: data.distanceKm,
        vehicleType: data.vehicleType,
        transportCost: data.transportCost,
        loadingCost: data.loadingCost,
        paymentStatus: data.paymentStatus,
        totalAmount: data.totalAmount,
        paidAmount: data.paidAmount,
        notes: data.notes,
      },
      include: {
        customer: true,
        brickType: true,
      },
    });

    return dispatch;
  }

  async getDispatches(
    startDate?: string,
    endDate?: string,
    customerId?: string,
    brickTypeId?: string,
    paymentStatus?: string
  ) {
    const where: any = {};

    if (startDate && endDate) {
      where.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    if (customerId) {
      where.customerId = customerId;
    }

    if (brickTypeId) {
      where.brickTypeId = brickTypeId;
    }

    if (paymentStatus) {
      where.paymentStatus = paymentStatus;
    }

    const dispatches = await prisma.dispatch.findMany({
      where,
      include: {
        customer: true,
        brickType: true,
      },
      orderBy: { date: 'desc' },
    });

    return dispatches;
  }

  async getDispatchById(id: string) {
    const dispatch = await prisma.dispatch.findUnique({
      where: { id },
      include: {
        customer: true,
        brickType: true,
      },
    });

    if (!dispatch) {
      throw new AppError('Dispatch not found', 404);
    }

    return dispatch;
  }

  async updateDispatch(id: string, data: UpdateDispatchInput) {
    const dispatch = await prisma.dispatch.findUnique({
      where: { id },
    });

    if (!dispatch) {
      throw new AppError('Dispatch not found', 404);
    }

    const updated = await prisma.dispatch.update({
      where: { id },
      data,
      include: {
        customer: true,
        brickType: true,
      },
    });

    return updated;
  }

  async deleteDispatch(id: string) {
    const dispatch = await prisma.dispatch.findUnique({
      where: { id },
    });

    if (!dispatch) {
      throw new AppError('Dispatch not found', 404);
    }

    await prisma.dispatch.delete({
      where: { id },
    });

    return { message: 'Dispatch deleted successfully' };
  }

  // Customer management
  async createCustomer(data: CreateCustomerInput) {
    const customer = await prisma.customer.create({
      data,
    });

    return customer;
  }

  async getAllCustomers(activeOnly: boolean = false) {
    const customers = await prisma.customer.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { name: 'asc' },
    });

    return customers;
  }

  async getCustomerById(id: string) {
    const customer = await prisma.customer.findUnique({
      where: { id },
      include: {
        dispatch: {
          orderBy: { date: 'desc' },
          take: 10,
        },
      },
    });

    if (!customer) {
      throw new AppError('Customer not found', 404);
    }

    return customer;
  }
}
