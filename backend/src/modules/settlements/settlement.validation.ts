import { z } from 'zod';

export const calculateWeeklySchema = z.object({
  weekStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  weekEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export const getWeeklySchema = z.object({
  weekStart: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  weekEnd: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  workerId: z.string().uuid().optional(),
  isSettled: z.enum(['true', 'false']).optional(),
});

export const payWeeklySchema = z.object({
  settlementIds: z
    .array(z.string().uuid())
    .min(1, { message: 'At least one settlement ID is required' }),
  paymentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export const calculateMonthlySchema = z.object({
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(2020).max(2100),
});

export const getMonthlySchema = z.object({
  month: z.string().optional(),
  year: z.string().optional(),
  workerId: z.string().uuid().optional(),
  isPaid: z.enum(['true', 'false']).optional(),
});

export const payMonthlySchema = z.object({
  settlementIds: z
    .array(z.string().uuid())
    .min(1, { message: 'At least one settlement ID is required' }),
  paymentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export type CalculateWeeklyInput = z.infer<typeof calculateWeeklySchema>;
export type GetWeeklyInput = z.infer<typeof getWeeklySchema>;
export type PayWeeklyInput = z.infer<typeof payWeeklySchema>;
export type CalculateMonthlyInput = z.infer<typeof calculateMonthlySchema>;
export type GetMonthlyInput = z.infer<typeof getMonthlySchema>;
export type PayMonthlyInput = z.infer<typeof payMonthlySchema>;
