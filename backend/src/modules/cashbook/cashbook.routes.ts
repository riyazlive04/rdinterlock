import { Router } from 'express';
import { CashbookController } from './cashbook.controller';
import { authenticate } from '../../middleware/auth';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();
const cashbookController = new CashbookController();

router.use(authenticate);

router.post('/', cashbookController.createCashEntry);
router.get('/', cashbookController.getCashEntries);
router.get('/balance', cashbookController.getCashBalance);
router.get('/:id', cashbookController.getCashEntryById);
router.patch('/:id', cashbookController.updateCashEntry);
router.delete('/:id', cashbookController.deleteCashEntry);
router.post('/import', upload.single('file'), cashbookController.importEntries);

export default router;
