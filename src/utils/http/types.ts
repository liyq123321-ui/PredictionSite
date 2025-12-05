/* eslint-disable @typescript-eslint/no-explicit-any */
// HTTP请求参数接口
export interface HttpRequestParams {
  [key: string]: string | number | boolean;
}

// HTTP客户端配置接口
export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// HTTP响应接口
export interface HttpResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

// HTTP错误接口
export interface HttpError {
  code: string;
  message: string;
  status?: number;
  data?: any;
}