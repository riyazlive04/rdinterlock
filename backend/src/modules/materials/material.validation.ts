import { z } from 'zod';

export const createMaterialSchema = z.object({
  name: z.string().min(2).max(100),
  unit: z.string().min(1).max(50),
  description: z.string().max(500).optional(),
});

export const updateMaterialSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  unit: z.string().min(1).max(50).optional(),
  description: z.string().max(500).optional(),
});

export const getMaterialUsageSchema = z.object({
  materialId: z.string().uuid().optional(),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  endDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export type CreateMaterialInput = z.infer<typeof createMaterialSchema>;
export type UpdateMaterialInput = z.infer<typeof updateMaterialSchema>;
export type GetMaterialUsageInput = z.infer<typeof getMaterialUsageSchema>;
