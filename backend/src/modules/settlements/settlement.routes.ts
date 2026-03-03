import { Router } from 'express';
import { SettlementController } from './settlement.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();
const controller = new SettlementController();

// Apply authentication to all routes
router.use(authenticate);

// Weekly Settlement Routes
router.post(
  '/weekly/calculate',
  controller.calculateWeeklySettlement.bind(controller)
);
router.post('/weekly', controller.saveWeeklySettlement.bind(controller));
router.get('/weekly', controller.getWeeklySettlements.bind(controller));
router.post('/weekly/pay', controller.payWeeklySettlements.bind(controller));
router.get(
  '/weekly/current',
  controller.getCurrentWeekSettlements.bind(controller)
);

// Monthly Settlement Routes
router.post(
  '/monthly/calculate',
  controller.calculateMonthlySalary.bind(controller)
);
router.post('/monthly', controller.saveMonthlySalary.bind(controller));
router.get('/monthly', controller.getMonthlySettlements.bind(controller));
router.post('/monthly/pay', controller.payMonthlySalaries.bind(controller));
router.get(
  '/monthly/current',
  controller.getCurrentMonthSalaries.bind(controller)
);

export default router;
