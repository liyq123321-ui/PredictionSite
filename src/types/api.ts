/* eslint-disable @typescript-eslint/no-explicit-any */
// 基础API响应接口 - 假设你的后端使用这种统一格式
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  data: T; // 实际数据放在 data 字段中
  success: boolean;
  timestamp?: number;
}

// 分页响应接口
export interface PaginatedResponse<T = any> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNext: boolean;
    hasPrev: boolean;
}

// 错误接口
export interface HttpError {
  code: string;
  message: string;
  status?: number;
  data?: any;
}