import { Router } from 'express';
import { MaterialController } from './material.controller';
import { authenticate } from '../../middleware/auth';

const router = Router();
const controller = new MaterialController();

// Apply authentication to all routes
router.use(authenticate);

// Material CRUD Routes
router.get('/', controller.getAllMaterials.bind(controller));
router.get('/:id', controller.getMaterialById.bind(controller));
router.post('/', controller.createMaterial.bind(controller));
router.patch('/:id', controller.updateMaterial.bind(controller));
router.delete('/:id', controller.toggleMaterialStatus.bind(controller));

// Material Usage Routes
router.get('/usage/list', controller.getMaterialUsage.bind(controller));
router.get('/usage/summary', controller.getMaterialUsageSummary.bind(controller));

// Seed Route
router.post('/seed/defaults', controller.seedDefaultMaterials.bind(controller));

export default router;
