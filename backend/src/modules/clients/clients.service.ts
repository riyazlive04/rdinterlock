import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';

export class ClientsService {
    // ═══════════════════════ CLIENTS ═══════════════════════

    async createClient(data: { name: string; phone?: string; address?: string; notes?: string }) {
        return prisma.customer.create({ data });
    }

    async getAllClients(search?: string) {
        const where: any = { isActive: true };
        if (search) {
            where.OR = [
                { name: { contains: search, mode: 'insensitive' } },
                { phone: { contains: search, mode: 'insensitive' } },
            ];
        }
        const clients = await prisma.customer.findMany({
            where,
            orderBy: { name: 'asc' },
            include: {
                _count: { select: { orders: true, payments: true } },
                orders: { select: { totalAmount: true } },
                payments: { select: { type: true, amount: true, paymentMethod: true } }
            },
        });

        return clients.map((client: any) => {
            const totalOrderAmount = client.orders.reduce((sum: number, o: any) => sum + o.totalAmount, 0);

            const totalAdvance = client.payments.filter((p: any) => p.type === 'ADVANCE').reduce((sum: number, p: any) => sum + p.amount, 0);
            const advanceUsed = client.payments.filter((p: any) => p.type === 'PAYMENT' && p.paymentMethod === 'ADVANCE_APPLIED').reduce((sum: number, p: any) => sum + p.amount, 0);
            const totalPaid = client.payments.filter((p: any) => p.type === 'PAYMENT').reduce((sum: number, p: any) => sum + p.amount, 0);

            const pendingAmount = totalOrderAmount - totalPaid;
            const advanceBalance = totalAdvance - advanceUsed;

            const { orders, payments, ...clientData } = client;

            return {
                ...clientData,
                totalOrderAmount,
                totalAdvance,
                advanceUsed,
                totalPaid,
                pendingAmount,
                advanceBalance
            };
        });
    }

    async getClientById(id: string) {
        const client = await prisma.customer.findUnique({
            where: { id },
            include: {
                orders: {
                    include: { brickType: true, payments: true },
                    orderBy: { orderDate: 'desc' },
                },
                payments: { orderBy: { paymentDate: 'desc' } },
                dispatchSchedules: {
                    include: { brickType: true, driver: true },
                    orderBy: { dispatchDate: 'desc' },
                },
                dispatches: {
                    include: { brickType: true },
                    orderBy: { date: 'desc' },
                },
            },
        });
        if (!client) throw new AppError('Client not found', 404);

        const totalAdvance = client.payments.filter(p => p.type === 'ADVANCE').reduce((s, p) => s + p.amount, 0);
        const advanceUsed = client.payments.filter(p => p.type === 'PAYMENT' && p.paymentMethod === 'ADVANCE_APPLIED').reduce((s, p) => s + p.amount, 0);
        const advanceBalance = totalAdvance - advanceUsed;

        return {
            ...client,
            totalAdvance,
            advanceUsed,
            advanceBalance
        };
    }

    async updateClient(id: string, data: any) {
        const client = await prisma.customer.findUnique({ where: { id } });
        if (!client) throw new AppError('Client not found', 404);
        return prisma.customer.update({ where: { id }, data });
    }

    async deleteClient(id: string) {
        const client = await prisma.customer.findUnique({ where: { id } });
        if (!client) throw new AppError('Client not found', 404);
        await prisma.customer.update({ where: { id }, data: { isActive: false } });
        return { message: 'Client deactivated' };
    }

    // ═══════════════════════ ORDERS ═══════════════════════

    async createOrder(data: any) {
        const totalAmount = data.totalAmount || (data.quantity * (data.rate || 0));
        return prisma.clientOrder.create({
            data: {
                clientId: data.clientId,
                brickTypeId: data.brickTypeId,
                quantity: data.quantity,
                rate: data.rate || 0,
                totalAmount,
                orderDate: new Date(data.orderDate),
                expectedDispatchDate: data.expectedDispatchDate ? new Date(data.expectedDispatchDate) : null,
                status: data.status || 'PENDING',
                notes: data.notes,
            },
            include: { client: true, brickType: true },
        });
    }

    async getAllOrders(filters?: { clientId?: string; status?: string }) {
        const where: any = {};
        if (filters?.clientId) where.clientId = filters.clientId;
        if (filters?.status) where.status = filters.status;

        return prisma.clientOrder.findMany({
            where,
            include: { client: true, brickType: true, payments: true },
            orderBy: { orderDate: 'desc' },
        });
    }

    async getOrderById(id: string) {
        const order = await prisma.clientOrder.findUnique({
            where: { id },
            include: { client: true, brickType: true, payments: true },
        });
        if (!order) throw new AppError('Order not found', 404);
        return order;
    }

    async updateOrder(id: string, data: any) {
        const order = await prisma.clientOrder.findUnique({ where: { id } });
        if (!order) throw new AppError('Order not found', 404);
        const updateData: any = { ...data };
        if (data.orderDate) updateData.orderDate = new Date(data.orderDate);
        if (data.expectedDispatchDate) updateData.expectedDispatchDate = new Date(data.expectedDispatchDate);
        if (data.quantity || data.rate) {
            const qty = data.quantity || order.quantity;
            const rate = data.rate !== undefined ? data.rate : order.rate;
            updateData.totalAmount = qty * rate;
        }
        return prisma.clientOrder.update({
            where: { id },
            data: updateData,
            include: { client: true, brickType: true },
        });
    }

    async deleteOrder(id: string) {
        const order = await prisma.clientOrder.findUnique({ where: { id } });
        if (!order) throw new AppError('Order not found', 404);
        await prisma.clientOrder.delete({ where: { id } });
        return { message: 'Order deleted' };
    }

    // ═══════════════════════ PAYMENTS ═══════════════════════

    async createPayment(data: any) {
        const isAdvance = data.type === 'ADVANCE';

        if (isAdvance) {
            const advancePayment = await prisma.clientPayment.create({
                data: {
                    clientId: data.clientId,
                    type: 'ADVANCE',
                    amount: data.amount,
                    paymentDate: new Date(data.paymentDate),
                    paymentMethod: data.paymentMethod,
                    notes: data.notes,
                },
                include: { client: true, order: true },
            });

            await (prisma.cashEntry as any).create({
                data: {
                    date: advancePayment.paymentDate,
                    type: 'CREDIT',
                    amount: advancePayment.amount,
                    description: `Advance received from ${(advancePayment as any).client.name}${advancePayment.notes ? ': ' + advancePayment.notes : ''}`,
                    category: 'Advance Received',
                    paymentMode: advancePayment.paymentMethod,
                    customerId: advancePayment.clientId,
                } as any
            });
            return advancePayment;
        }

        // Regular Payment (or partly regular, partly advance applied)
        let newPayment: any = null;

        if (data.amount > 0) {
            newPayment = await prisma.clientPayment.create({
                data: {
                    clientId: data.clientId,
                    orderId: data.orderId || null,
                    type: 'PAYMENT',
                    amount: data.amount,
                    paymentDate: new Date(data.paymentDate),
                    paymentMethod: data.paymentMethod,
                    notes: data.notes,
                },
                include: { client: true, order: true },
            });

            await (prisma.cashEntry as any).create({
                data: {
                    date: newPayment.paymentDate,
                    type: 'CREDIT',
                    amount: newPayment.amount,
                    description: `Client payment from ${(newPayment as any).client.name}${newPayment.notes ? ': ' + newPayment.notes : ''}`,
                    category: 'Client Payment',
                    paymentMode: newPayment.paymentMethod,
                    customerId: newPayment.clientId,
                } as any
            });
        }

        // Auto-Apply Advance Logic if there is an order
        if (data.orderId) {
            const order = await prisma.clientOrder.findUnique({
                where: { id: data.orderId },
                include: { payments: true }
            });

            if (order) {
                const orderTotalPaid = order.payments.reduce((sum, p) => sum + p.amount, 0);
                const currentPending = order.totalAmount - orderTotalPaid;

                if (currentPending > 0) {
                    const allClientPayments = await prisma.clientPayment.findMany({
                        where: { clientId: data.clientId }
                    });
                    const totalAdvance = allClientPayments.filter(p => p.type === 'ADVANCE').reduce((s, p) => s + p.amount, 0);
                    const advanceUsed = allClientPayments.filter(p => p.type === 'PAYMENT' && p.paymentMethod === 'ADVANCE_APPLIED').reduce((s, p) => s + p.amount, 0);
                    const advanceBalance = totalAdvance - advanceUsed;

                    if (advanceBalance > 0) {
                        const amountToApply = Math.min(currentPending, advanceBalance);

                        await prisma.clientPayment.create({
                            data: {
                                clientId: data.clientId,
                                orderId: data.orderId,
                                type: 'PAYMENT',
                                amount: amountToApply,
                                paymentDate: new Date(data.paymentDate),
                                paymentMethod: 'ADVANCE_APPLIED',
                                notes: 'System Auto-Applied Advance'
                            }
                        });
                    }
                }
            }
        }

        // Update Order Status
        if (data.orderId) {
            const orderFinal = await prisma.clientOrder.findUnique({
                where: { id: data.orderId },
                include: { payments: true },
            });
            if (orderFinal) {
                const totalPaidFinal = orderFinal.payments.reduce((sum, p) => sum + p.amount, 0);
                if (totalPaidFinal >= orderFinal.totalAmount) {
                    await prisma.clientOrder.update({
                        where: { id: data.orderId },
                        data: { status: 'COMPLETED' },
                    });
                }
            }
        }

        return newPayment || { message: "Advance applied successfully" };
    }

    async getAllPayments(filters?: { clientId?: string }) {
        const where: any = {};
        if (filters?.clientId) where.clientId = filters.clientId;
        return prisma.clientPayment.findMany({
            where,
            include: { client: true, order: { include: { brickType: true } } },
            orderBy: { paymentDate: 'desc' },
        });
    }

    async updatePayment(id: string, data: any) {
        const payment = await prisma.clientPayment.findUnique({ where: { id } });
        if (!payment) throw new AppError('Payment not found', 404);
        const updateData: any = { ...data };
        if (data.paymentDate) updateData.paymentDate = new Date(data.paymentDate);
        return prisma.clientPayment.update({
            where: { id },
            data: updateData,
            include: { client: true, order: true },
        });
    }

    async deletePayment(id: string) {
        const payment = await prisma.clientPayment.findUnique({ where: { id } });
        if (!payment) throw new AppError('Payment not found', 404);

        if (payment.paymentMethod !== 'ADVANCE_APPLIED') {
            await (prisma.cashEntry as any).deleteMany({
                where: {
                    customerId: payment.clientId,
                    amount: payment.amount,
                    date: payment.paymentDate,
                    category: payment.type === 'ADVANCE' ? 'Advance Received' : 'Client Payment'
                } as any
            });
        }

        await prisma.clientPayment.delete({ where: { id } });
        return { message: 'Payment deleted' };
    }

    // ═══════════════════════ DISPATCH SCHEDULING ═══════════════════════

    async createSchedule(data: any) {
        return prisma.dispatchSchedule.create({
            data: {
                clientId: data.clientId,
                brickTypeId: data.brickTypeId,
                quantity: data.quantity,
                location: data.location,
                dispatchDate: new Date(data.dispatchDate),
                driverId: data.driverId || null,
                status: data.status || 'SCHEDULED',
                notes: data.notes,
            },
            include: { client: true, brickType: true, driver: true },
        });
    }

    async getAllSchedules(filters?: { status?: string }) {
        const where: any = {};
        if (filters?.status) where.status = filters.status;
        return prisma.dispatchSchedule.findMany({
            where,
            include: { client: true, brickType: true, driver: true },
            orderBy: { dispatchDate: 'asc' },
        });
    }

    async updateSchedule(id: string, data: any) {
        const schedule = await prisma.dispatchSchedule.findUnique({ where: { id } });
        if (!schedule) throw new AppError('Schedule not found', 404);
        const updateData: any = { ...data };
        if (data.dispatchDate) updateData.dispatchDate = new Date(data.dispatchDate);
        return prisma.dispatchSchedule.update({
            where: { id },
            data: updateData,
            include: { client: true, brickType: true, driver: true },
        });
    }

    async deleteSchedule(id: string) {
        const schedule = await prisma.dispatchSchedule.findUnique({ where: { id } });
        if (!schedule) throw new AppError('Schedule not found', 404);
        await prisma.dispatchSchedule.delete({ where: { id } });
        return { message: 'Schedule deleted' };
    }

    // ═══════════════════════ UPCOMING REMINDERS ═══════════════════════

    async getUpcomingDispatches() {
        const now = new Date();
        const threeDaysLater = new Date(now.getTime() + 3 * 86400000);
        return prisma.dispatchSchedule.findMany({
            where: {
                dispatchDate: { lte: threeDaysLater },
                status: { not: 'DISPATCHED' },
            },
            include: { client: true, brickType: true, driver: true },
            orderBy: { dispatchDate: 'asc' },
        });
    }

    // ═══════════════════════ CLIENT LEDGER SUMMARY ═══════════════════════

    async getClientLedger(clientId: string) {
        const orders = await prisma.clientOrder.findMany({
            where: { clientId },
            include: { brickType: true, payments: true },
            orderBy: { orderDate: 'desc' },
        });

        const totalOrderAmount = orders.reduce((s, o) => s + o.totalAmount, 0);
        const totalPaid = orders.reduce((s, o) => s + o.payments.reduce((ps, p) => ps + p.amount, 0), 0);
        const pendingAmount = totalOrderAmount - totalPaid;

        const allPayments = await prisma.clientPayment.findMany({
            where: { clientId }
        });
        const totalAdvance = allPayments.filter(p => p.type === 'ADVANCE').reduce((s, p) => s + p.amount, 0);
        const advanceUsed = allPayments.filter(p => p.type === 'PAYMENT' && p.paymentMethod === 'ADVANCE_APPLIED').reduce((s, p) => s + p.amount, 0);
        const advanceBalance = totalAdvance - advanceUsed;

        return { orders, totalOrderAmount, totalPaid, pendingAmount, totalAdvance, advanceUsed, advanceBalance };
    }
}
