import { HttpClient } from './HttpClient';

// 创建全局HttpClient实例
export const httpClient = new HttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
  },
});

// 导出类型和类
export * from './types';
export { HttpClient };