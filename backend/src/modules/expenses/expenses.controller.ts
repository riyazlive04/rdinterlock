import { Request, Response } from 'express';
import { ExpensesService } from './expenses.service';
import { createExpenseSchema, updateExpenseSchema } from './expenses.validation';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendSuccess } from '../../utils/response';

const expensesService = new ExpensesService();

export class ExpensesController {
  createExpense = asyncHandler(async (req: Request, res: Response) => {
    const validatedData = createExpenseSchema.parse(req.body);
    const expense = await expensesService.createExpense(validatedData);
    sendSuccess(res, expense, 'Expense created successfully', 201);
  });

  getExpenses = asyncHandler(async (req: Request, res: Response) => {
    const { startDate, endDate, category, workerId } = req.query;
    const expenses = await expensesService.getExpenses(
      startDate as string,
      endDate as string,
      category as string,
      workerId as string
    );
    sendSuccess(res, expenses, 'Expenses retrieved successfully');
  });

  getExpenseById = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const expense = await expensesService.getExpenseById(id);
    sendSuccess(res, expense, 'Expense retrieved successfully');
  });

  updateExpense = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const validatedData = updateExpenseSchema.parse(req.body);
    const expense = await expensesService.updateExpense(id, validatedData);
    sendSuccess(res, expense, 'Expense updated successfully');
  });

  deleteExpense = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await expensesService.deleteExpense(id);
    sendSuccess(res, result, 'Expense deleted successfully');
  });

  getExpensesSummary = asyncHandler(async (req: Request, res: Response) => {
    const { startDate, endDate } = req.query;
    const summary = await expensesService.getExpensesSummary(
      startDate as string,
      endDate as string
    );
    sendSuccess(res, summary, 'Expenses summary retrieved successfully');
  });
}
