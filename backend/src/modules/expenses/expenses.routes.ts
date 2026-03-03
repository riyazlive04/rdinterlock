import { Router } from 'express';
import { ExpensesController } from './expenses.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();
const expensesController = new ExpensesController();

router.use(authenticate);

router.post('/', expensesController.createExpense);
router.get('/', expensesController.getExpenses);
router.get('/summary', expensesController.getExpensesSummary);
router.get('/:id', expensesController.getExpenseById);
router.patch('/:id', expensesController.updateExpense);
router.delete('/:id', expensesController.deleteExpense);

export default router;
