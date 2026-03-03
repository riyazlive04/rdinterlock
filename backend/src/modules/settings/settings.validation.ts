import { z } from 'zod';

export const createMachineSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const updateMachineSchema = z.object({
  name: z.string().min(2).optional(),
  isActive: z.boolean().optional(),
});

export const createBrickTypeSchema = z.object({
  size: z.string().min(1, 'Size is required'),
});

export const updateBrickTypeSchema = z.object({
  size: z.string().min(1).optional(),
  isActive: z.boolean().optional(),
});

export type CreateMachineInput = z.infer<typeof createMachineSchema>;
export type UpdateMachineInput = z.infer<typeof updateMachineSchema>;
export type CreateBrickTypeInput = z.infer<typeof createBrickTypeSchema>;
export type UpdateBrickTypeInput = z.infer<typeof updateBrickTypeSchema>;
