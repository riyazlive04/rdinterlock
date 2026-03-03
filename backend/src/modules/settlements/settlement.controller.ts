import { Request, Response } from 'express';
import { WeeklySettlementService } from './weekly.service';
import { MonthlySettlementService } from './monthly.service';
import {
  calculateWeeklySchema,
  getWeeklySchema,
  payWeeklySchema,
  calculateMonthlySchema,
  getMonthlySchema,
  payMonthlySchema,
} from './settlement.validation';

const weeklyService = new WeeklySettlementService();
const monthlyService = new MonthlySettlementService();

export class SettlementController {
  // Weekly Settlement Endpoints

  async calculateWeeklySettlement(req: Request, res: Response) {
    try {
      const { weekStart, weekEnd } = calculateWeeklySchema.parse(req.body);

      const settlements = await weeklyService.calculateWeeklySettlement(
        new Date(weekStart),
        new Date(weekEnd)
      );

      res.status(200).json({
        success: true,
        data: {
          weekStart,
          weekEnd,
          settlements,
        },
        message: 'Weekly settlement calculated successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to calculate weekly settlement',
      });
    }
  }

  async saveWeeklySettlement(req: Request, res: Response) {
    try {
      const { weekStart, weekEnd } = calculateWeeklySchema.parse(req.body);

      // Calculate
      const settlements = await weeklyService.calculateWeeklySettlement(
        new Date(weekStart),
        new Date(weekEnd)
      );

      // Save
      const saved = await weeklyService.saveWeeklySettlement(
        new Date(weekStart),
        new Date(weekEnd),
        settlements
      );

      res.status(201).json({
        success: true,
        data: saved,
        message: 'Weekly settlement saved successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to save weekly settlement',
      });
    }
  }

  async getWeeklySettlements(req: Request, res: Response) {
    try {
      const query = getWeeklySchema.parse(req.query);

      const filters: any = {};

      if (query.weekStart) {
        filters.weekStart = new Date(query.weekStart);
      }

      if (query.weekEnd) {
        filters.weekEnd = new Date(query.weekEnd);
      }

      if (query.workerId) {
        filters.workerId = query.workerId;
      }

      if (query.isSettled) {
        filters.isSettled = query.isSettled === 'true';
      }

      const settlements = await weeklyService.getSettlements(filters);

      res.status(200).json({
        success: true,
        data: settlements,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch weekly settlements',
      });
    }
  }

  async payWeeklySettlements(req: Request, res: Response) {
    try {
      const { settlementIds, paymentDate } = payWeeklySchema.parse(req.body);

      const result = await weeklyService.paySettlements(
        settlementIds,
        paymentDate ? new Date(paymentDate) : undefined
      );

      res.status(200).json({
        success: true,
        data: result,
        message: 'Weekly settlements paid successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to pay weekly settlements',
      });
    }
  }

  async getCurrentWeekSettlements(_req: Request, res: Response) {
    try {
      const settlements = await weeklyService.getCurrentWeekSettlements();

      res.status(200).json({
        success: true,
        data: settlements,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch current week settlements',
      });
    }
  }

  // Monthly Settlement Endpoints

  async calculateMonthlySalary(req: Request, res: Response) {
    try {
      const { month, year } = calculateMonthlySchema.parse(req.body);

      const salaries = await monthlyService.calculateMonthlySalary(month, year);

      res.status(200).json({
        success: true,
        data: {
          month,
          year,
          salaries,
        },
        message: 'Monthly salaries calculated successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to calculate monthly salaries',
      });
    }
  }

  async saveMonthlySalary(req: Request, res: Response) {
    try {
      const { month, year } = calculateMonthlySchema.parse(req.body);

      // Calculate
      const salaries = await monthlyService.calculateMonthlySalary(month, year);

      // Save
      const saved = await monthlyService.saveMonthlySalary(
        month,
        year,
        salaries
      );

      res.status(201).json({
        success: true,
        data: saved,
        message: 'Monthly salaries saved successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to save monthly salaries',
      });
    }
  }

  async getMonthlySettlements(req: Request, res: Response) {
    try {
      const query = getMonthlySchema.parse(req.query);

      const filters: any = {};

      if (query.month) {
        filters.month = parseInt(query.month);
      }

      if (query.year) {
        filters.year = parseInt(query.year);
      }

      if (query.workerId) {
        filters.workerId = query.workerId;
      }

      if (query.isPaid) {
        filters.isPaid = query.isPaid === 'true';
      }

      const settlements = await monthlyService.getSettlements(filters);

      res.status(200).json({
        success: true,
        data: settlements,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch monthly settlements',
      });
    }
  }

  async payMonthlySalaries(req: Request, res: Response) {
    try {
      const { settlementIds, paymentDate } = payMonthlySchema.parse(req.body);

      const result = await monthlyService.paySalaries(
        settlementIds,
        paymentDate ? new Date(paymentDate) : undefined
      );

      res.status(200).json({
        success: true,
        data: result,
        message: 'Monthly salaries paid successfully',
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to pay monthly salaries',
      });
    }
  }

  async getCurrentMonthSalaries(_req: Request, res: Response) {
    try {
      const settlements = await monthlyService.getCurrentMonthSalaries();

      res.status(200).json({
        success: true,
        data: settlements,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message || 'Failed to fetch current month salaries',
      });
    }
  }
}
