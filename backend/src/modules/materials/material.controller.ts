import { Request, Response } from 'express';
import { MaterialService } from './material.service';
import {
  createMaterialSchema,
  updateMaterialSchema,
  getMaterialUsageSchema,
} from './material.validation';

const materialService = new MaterialService();

export class MaterialController {
  async getAllMaterials(req: Request, res: Response) {
    try {
      const includeInactive = req.query.includeInactive === 'true';
      const materials = await materialService.getAllMaterials(includeInactive);

      res.status(200).json({
        success: true,
        data: materials,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch materials',
      });
    }
  }

  async getMaterialById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const material = await materialService.getMaterialById(id);

      res.status(200).json({
        success: true,
        data: material,
      });
    } catch (error: any) {
      res.status(404).json({
        success: false,
        message: error.message || 'Material not found',
      });
    }
  }

  async createMaterial(req: Request, res: Response) {
    try {
      const data = createMaterialSchema.parse(req.body);
      const material = await materialService.createMaterial(data);

      res.status(201).json({
        success: true,
        data: material,
        message: 'Material created successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to create material',
      });
    }
  }

  async updateMaterial(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = updateMaterialSchema.parse(req.body);
      const material = await materialService.updateMaterial(id, data);

      res.status(200).json({
        success: true,
        data: material,
        message: 'Material updated successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to update material',
      });
    }
  }

  async toggleMaterialStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const material = await materialService.toggleMaterialStatus(id);

      res.status(200).json({
        success: true,
        data: material,
        message: `Material ${material.isActive ? 'activated' : 'deactivated'} successfully`,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to toggle material status',
      });
    }
  }

  async getMaterialUsage(req: Request, res: Response) {
    try {
      const query = getMaterialUsageSchema.parse(req.query);

      const filters: any = {};

      if (query.materialId) {
        filters.materialId = query.materialId;
      }

      if (query.startDate) {
        filters.startDate = new Date(query.startDate);
      }

      if (query.endDate) {
        filters.endDate = new Date(query.endDate);
      }

      const usage = await materialService.getMaterialUsage(filters);

      res.status(200).json({
        success: true,
        data: usage,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch material usage',
      });
    }
  }

  async getMaterialUsageSummary(req: Request, res: Response) {
    try {
      const query = getMaterialUsageSchema.parse(req.query);

      const startDate = query.startDate ? new Date(query.startDate) : undefined;
      const endDate = query.endDate ? new Date(query.endDate) : undefined;

      const summary = await materialService.getMaterialUsageSummary(
        startDate,
        endDate
      );

      res.status(200).json({
        success: true,
        data: summary,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch material usage summary',
      });
    }
  }

  async seedDefaultMaterials(_req: Request, res: Response) {
    try {
      const created = await materialService.seedDefaultMaterials();

      res.status(200).json({
        success: true,
        data: created,
        message:
          created.length > 0
            ? `${created.length} default materials created`
            : 'Default materials already exist',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to seed default materials',
      });
    }
  }
}
