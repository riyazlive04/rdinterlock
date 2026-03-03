import apiClient from './apiClient';
import type { ApiResponse, DashboardSummary } from '../types/api';

export const dashboardApi = {
  getSummary: async (): Promise<DashboardSummary> => {
    const response = await apiClient.get<any, ApiResponse<DashboardSummary>>('/reports/dashboard');
    return response.data;
  },
};
