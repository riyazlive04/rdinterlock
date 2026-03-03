import { Request, Response } from 'express';
import { WorkersService } from './workers.service';
import { createWorkerSchema, updateWorkerSchema } from './workers.validation';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendSuccess } from '../../utils/response';

const workersService = new WorkersService();

export class WorkersController {
  createWorker = asyncHandler(async (req: Request, res: Response) => {
    const validatedData = createWorkerSchema.parse(req.body);
    const worker = await workersService.createWorker(validatedData);
    sendSuccess(res, worker, 'Worker created successfully', 201);
  });

  getAllWorkers = asyncHandler(async (req: Request, res: Response) => {
    const activeOnly = req.query.activeOnly === 'true';
    const workers = await workersService.getAllWorkers(activeOnly);
    sendSuccess(res, workers, 'Workers retrieved successfully');
  });

  getWorkerById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const worker = await workersService.getWorkerById(id);
    sendSuccess(res, worker, 'Worker retrieved successfully');
  });

  updateWorker = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const validatedData = updateWorkerSchema.parse(req.body);
    const worker = await workersService.updateWorker(id, validatedData);
    sendSuccess(res, worker, 'Worker updated successfully');
  });

  deleteWorker = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await workersService.deleteWorker(id);
    sendSuccess(res, result, 'Worker deleted successfully');
  });

  getWorkerStats = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { startDate, endDate } = req.query;

    const stats = await workersService.getWorkerStats(
      id,
      startDate ? new Date(startDate as string) : undefined,
      endDate ? new Date(endDate as string) : undefined
    );

    sendSuccess(res, stats, 'Worker stats retrieved successfully');
  });
}
