import prisma from '../../config/database';
import { AppError } from '../../middleware/errorHandler';
import {
  CreateMachineInput,
  UpdateMachineInput,
  CreateBrickTypeInput,
  UpdateBrickTypeInput,
} from './settings.validation';

export class SettingsService {
  // Machine management
  async createMachine(data: CreateMachineInput) {
    const machine = await prisma.machine.create({
      data,
    });

    return machine;
  }

  async getAllMachines(activeOnly: boolean = false) {
    const machines = await prisma.machine.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { name: 'asc' },
    });

    return machines;
  }

  async getMachineById(id: string) {
    const machine = await prisma.machine.findUnique({
      where: { id },
    });

    if (!machine) {
      throw new AppError('Machine not found', 404);
    }

    return machine;
  }

  async updateMachine(id: string, data: UpdateMachineInput) {
    const machine = await prisma.machine.findUnique({
      where: { id },
    });

    if (!machine) {
      throw new AppError('Machine not found', 404);
    }

    const updated = await prisma.machine.update({
      where: { id },
      data,
    });

    return updated;
  }

  async deleteMachine(id: string, forceDelete: boolean = false) {
    const machine = await prisma.machine.findUnique({
      where: { id },
    });

    if (!machine) {
      throw new AppError('Machine not found', 404);
    }

    if (forceDelete) {
      await prisma.$transaction(async (tx) => {
        // 1. Find all production IDs for this machine
        const productions = await tx.production.findMany({
          where: { machineId: id },
          select: { id: true }
        });
        const productionIds = productions.map(p => p.id);

        // 2. Delete ProductionWorkers first
        await tx.productionWorker.deleteMany({
          where: { productionId: { in: productionIds } }
        });

        // 3. Delete Productions
        await tx.production.deleteMany({
          where: { machineId: id }
        });

        // 4. Delete Machine
        await tx.machine.delete({
          where: { id }
        });
      });
      return { message: 'Machine and related production records deleted permanently' };
    }

    // Soft delete
    await prisma.machine.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'Machine deactivated successfully' };
  }

  // Brick Type management
  async createBrickType(data: CreateBrickTypeInput) {
    const existing = await prisma.brickType.findUnique({
      where: { size: data.size },
    });

    if (existing) {
      throw new AppError('Brick type with this size already exists', 400);
    }

    const brickType = await prisma.brickType.create({
      data,
    });

    return brickType;
  }

  async getAllBrickTypes(activeOnly: boolean = false) {
    const brickTypes = await prisma.brickType.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { size: 'asc' },
    });

    return brickTypes;
  }

  async getBrickTypeById(id: string) {
    const brickType = await prisma.brickType.findUnique({
      where: { id },
    });

    if (!brickType) {
      throw new AppError('Brick type not found', 404);
    }

    return brickType;
  }

  async updateBrickType(id: string, data: UpdateBrickTypeInput) {
    const brickType = await prisma.brickType.findUnique({
      where: { id },
    });

    if (!brickType) {
      throw new AppError('Brick type not found', 404);
    }

    const updated = await prisma.brickType.update({
      where: { id },
      data,
    });

    return updated;
  }

  async deleteBrickType(id: string, forceDelete: boolean = false) {
    const brickType = await prisma.brickType.findUnique({
      where: { id },
    });

    if (!brickType) {
      throw new AppError('Brick type not found', 404);
    }

    if (forceDelete) {
      await prisma.$transaction(async (tx) => {
        // 1. Find all production IDs for this brick type
        const productions = await tx.production.findMany({
          where: { brickTypeId: id },
          select: { id: true }
        });
        const productionIds = productions.map(p => p.id);

        // 2. Delete relations that depend on BrickType or its productions
        await tx.productionWorker.deleteMany({
          where: { productionId: { in: productionIds } }
        });
        await tx.production.deleteMany({ where: { brickTypeId: id } });

        // 3. Delete other direct relations
        await tx.clientOrder.deleteMany({ where: { brickTypeId: id } });
        await tx.dispatchSchedule.deleteMany({ where: { brickTypeId: id } });
        await tx.dispatch.deleteMany({ where: { brickTypeId: id } });

        // 4. Delete BrickType
        await tx.brickType.delete({ where: { id } });
      });
      return { message: 'Brick type and all related records deleted permanently' };
    }

    // Soft delete
    await prisma.brickType.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'Brick type deactivated successfully' };
  }

  // Raw Material management
  async createRawMaterial(data: { name: string; unit: string }) {
    const existing = await prisma.rawMaterial.findUnique({
      where: { name: data.name },
    });

    if (existing) {
      throw new AppError('Raw material with this name already exists', 400);
    }

    const material = await prisma.rawMaterial.create({
      data: { ...data, isActive: true },
    });

    return material;
  }

  async getAllRawMaterials(activeOnly: boolean = false) {
    const materials = await prisma.rawMaterial.findMany({
      where: activeOnly ? { isActive: true } : undefined,
      orderBy: { name: 'asc' },
    });

    return materials;
  }

  async deleteRawMaterial(id: string, forceDelete: boolean = false) {
    const material = await prisma.rawMaterial.findUnique({
      where: { id },
    });

    if (!material) {
      throw new AppError('Raw material not found', 404);
    }

    if (forceDelete) {
      await prisma.$transaction(async (tx) => {
        // 1. Delete direct relations
        await tx.materialUsage.deleteMany({ where: { materialId: id } });

        // 2. Clear foreign keys in linked tables
        await tx.expense.updateMany({ where: { materialId: id }, data: { materialId: null } });
        await tx.cashEntry.updateMany({ where: { materialId: id }, data: { materialId: null } });

        // 3. Delete RawMaterial
        await tx.rawMaterial.delete({ where: { id } });
      });
      return { message: 'Raw material and related records deleted permanently' };
    }

    // Soft delete
    await prisma.rawMaterial.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'Raw material deactivated successfully' };
  }

  async getFormMetadata() {
    const [machines, brickTypes, workers, rawMaterials] = await Promise.all([
      prisma.machine.findMany({
        where: { isActive: true },
        orderBy: { name: 'asc' },
      }),
      prisma.brickType.findMany({
        where: { isActive: true },
        orderBy: { size: 'asc' },
      }),
      prisma.worker.findMany({
        where: { isActive: true, employeeType: 'Worker' },
        orderBy: { name: 'asc' },
      }),
      prisma.rawMaterial.findMany({
        where: { isActive: true },
        orderBy: { name: 'asc' },
      }),
    ]);

    return {
      machines,
      brickTypes,
      workers,
      rawMaterials,
    };
  }
}
