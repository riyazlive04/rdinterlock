import { z } from 'zod';

export const createWorkerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.string().min(1, 'Role is required'),
  employeeType: z.enum(['Staff', 'Worker']).default('Worker'),
  paymentType: z.string().min(1, 'Payment type is required'),
  monthlySalary: z.number().nonnegative().optional().default(0),
  weeklyWage: z.number().nonnegative().optional().default(0),
  perBrickRate: z.number().nonnegative().optional().default(0),
  rate: z.number().nonnegative().optional().default(0), // Keeping for compatibility
});

export const updateWorkerSchema = z.object({
  name: z.string().min(2).optional(),
  role: z.string().optional(),
  employeeType: z.enum(['Staff', 'Worker']).optional(),
  paymentType: z.string().optional(),
  monthlySalary: z.number().nonnegative().optional(),
  weeklyWage: z.number().nonnegative().optional(),
  perBrickRate: z.number().nonnegative().optional(),
  rate: z.number().nonnegative().optional(),
  isActive: z.boolean().optional(),
});

export type CreateWorkerInput = z.infer<typeof createWorkerSchema>;
export type UpdateWorkerInput = z.infer<typeof updateWorkerSchema>;
