import { Response } from 'express';

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  meta?: any;
}

export const sendSuccess = (
  res: Response,
  data: any = null,
  message: string = 'Success',
  statusCode: number = 200,
  meta?: any
) => {
  const response: ApiResponse = {
    success: true,
    message,
    data,
  };

  if (meta) {
    response.meta = meta;
  }

  return res.status(statusCode).json(response);
};

export const sendError = (
  res: Response,
  message: string = 'Error occurred',
  statusCode: number = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
