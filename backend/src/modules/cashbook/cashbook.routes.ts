import { Router } from 'express';
import { CashbookController } from './cashbook.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();
const cashbookController = new CashbookController();

router.use(authenticate);

router.post('/', cashbookController.createCashEntry);
router.get('/', cashbookController.getCashEntries);
router.get('/balance', cashbookController.getCashBalance);
router.get('/:id', cashbookController.getCashEntryById);
router.patch('/:id', cashbookController.updateCashEntry);
router.delete('/:id', cashbookController.deleteCashEntry);

export default router;
