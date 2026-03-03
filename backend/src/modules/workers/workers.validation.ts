import { z } from 'zod';

export const createWorkerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['OPERATOR', 'HELPER', 'LOADER'], {
    errorMap: () => ({ message: 'Role must be OPERATOR, HELPER, or LOADER' }),
  }),
  paymentType: z.enum(['DAILY', 'PER_BRICK'], {
    errorMap: () => ({ message: 'Payment type must be DAILY or PER_BRICK' }),
  }),
  rate: z.number().positive('Rate must be a positive number'),
});

export const updateWorkerSchema = z.object({
  name: z.string().min(2).optional(),
  role: z.enum(['OPERATOR', 'HELPER', 'LOADER']).optional(),
  paymentType: z.enum(['DAILY', 'PER_BRICK']).optional(),
  rate: z.number().positive().optional(),
  isActive: z.boolean().optional(),
});

export type CreateWorkerInput = z.infer<typeof createWorkerSchema>;
export type UpdateWorkerInput = z.infer<typeof updateWorkerSchema>;
