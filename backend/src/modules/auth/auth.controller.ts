import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { loginSchema, registerSchema } from './auth.validation';
import { asyncHandler } from '../../utils/asyncHandler';
import { sendSuccess } from '../../utils/response';
import { AuthRequest } from '../../middleware/auth';

const authService = new AuthService();

export class AuthController {
  register = asyncHandler(async (req: Request, res: Response) => {
    const validatedData = registerSchema.parse(req.body);
    const result = await authService.register(validatedData);
    sendSuccess(res, result, 'User registered successfully', 201);
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const validatedData = loginSchema.parse(req.body);
    const result = await authService.login(validatedData);
    sendSuccess(res, result, 'Login successful');
  });

  getProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
    const userId = req.user!.id;
    const profile = await authService.getProfile(userId);
    sendSuccess(res, profile, 'Profile retrieved successfully');
  });
}
