import apiClient from './apiClient';
import type { ApiResponse, Expense, CreateExpenseRequest } from '../types/api';

export const expensesApi = {
  getAll: async (params?: {
    startDate?: string;
    endDate?: string;
    category?: string;
    workerId?: string;
  }): Promise<Expense[]> => {
    const response = await apiClient.get<any, ApiResponse<Expense[]>>('/expenses', { params });
    return response.data;
  },

  getById: async (id: string): Promise<Expense> => {
    const response = await apiClient.get<any, ApiResponse<Expense>>(`/expenses/${id}`);
    return response.data;
  },

  create: async (data: CreateExpenseRequest): Promise<Expense> => {
    const response = await apiClient.post<any, ApiResponse<Expense>>('/expenses', data);
    return response.data;
  },

  update: async (id: string, data: Partial<CreateExpenseRequest>): Promise<Expense> => {
    const response = await apiClient.patch<any, ApiResponse<Expense>>(`/expenses/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await apiClient.delete(`/expenses/${id}`);
  },

  getSummary: async (params?: { startDate?: string; endDate?: string }) => {
    const response = await apiClient.get<any, ApiResponse<any>>('/expenses/summary', { params });
    return response.data;
  },
};
