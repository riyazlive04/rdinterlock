import apiClient from './apiClient';
import type { ApiResponse, StockData } from '../types/api';

export const stockApi = {
  getCurrent: async (brickTypeId?: string): Promise<StockData[]> => {
    const response = await apiClient.get<any, ApiResponse<StockData[]>>('/stock/current', {
      params: { brickTypeId },
    });
    return response.data;
  },

  getReady: async (): Promise<StockData[]> => {
    const response = await apiClient.get<any, ApiResponse<StockData[]>>('/stock/ready');
    return response.data;
  },

  getHistory: async (params: {
    startDate: string;
    endDate: string;
    brickTypeId?: string;
  }) => {
    const response = await apiClient.get<any, ApiResponse<any>>('/stock/history', { params });
    return response.data;
  },
};
