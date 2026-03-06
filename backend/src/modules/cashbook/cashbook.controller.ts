import { Request, Response } from 'express';
import { CashbookService } from './cashbook.service';
import { createCashEntrySchema, updateCashEntrySchema } from './cashbook.validation';
import { asyncHandler } from '../../utils/asyncHandler';
import { AppError } from '../../middleware/errorHandler';
import { sendSuccess } from '../../utils/response';

const cashbookService = new CashbookService();

export class CashbookController {
  createCashEntry = asyncHandler(async (req: Request, res: Response) => {
    const validatedData = createCashEntrySchema.parse(req.body);
    const entry = await cashbookService.createCashEntry(validatedData);
    sendSuccess(res, entry, 'Cash entry created successfully', 201);
  });

  getCashEntries = asyncHandler(async (req: Request, res: Response) => {
    const { startDate, endDate, type, category, search } = req.query;
    const entries = await cashbookService.getCashEntries(
      startDate as string,
      endDate as string,
      type as string,
      category as string,
      search as string
    );
    sendSuccess(res, entries, 'Cash entries retrieved successfully');
  });

  importEntries = asyncHandler(async (req: Request, res: Response) => {
    const file = (req as any).file;
    if (!file) {
      throw new AppError('No file uploaded', 400);
    }

    const xlsx = require('xlsx');
    const workbook = xlsx.read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const results = await cashbookService.importCashEntries(data);
    sendSuccess(res, results, 'Import processed successfully');
  });

  getCashEntryById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const entry = await cashbookService.getCashEntryById(id);
    sendSuccess(res, entry, 'Cash entry retrieved successfully');
  });

  updateCashEntry = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const validatedData = updateCashEntrySchema.parse(req.body);
    const entry = await cashbookService.updateCashEntry(id, validatedData);
    sendSuccess(res, entry, 'Cash entry updated successfully');
  });

  deleteCashEntry = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await cashbookService.deleteCashEntry(id);
    sendSuccess(res, result, 'Cash entry deleted successfully');
  });

  getCashBalance = asyncHandler(async (req: Request, res: Response) => {
    const { startDate, endDate } = req.query;
    const balance = await cashbookService.getCashBalance(
      startDate as string,
      endDate as string
    );
    sendSuccess(res, balance, 'Cash balance retrieved successfully');
  });
}
