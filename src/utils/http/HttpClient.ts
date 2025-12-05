/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { CreateMarketRequest } from '../../domains/market/model/Market';
import type { Market } from '../../domains/market/model/Market';
import type { ApiResponse, PaginatedResponse, HttpError } from '../../types/api';


// HTTP请求参数接口
export interface HttpRequestParams {
  [key: string]: string | number | boolean;
}

// HttpClient配置接口
export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// 条件类型：根据泛型 T 判断返回类型
type UnwrapApiResponse<T> = T extends PaginatedResponse<any> 
  ? T
  : T extends any[] 
    ? T
    : T;

export class HttpClient {
//   static get<T>(endpoint: string): import("../../domains/market/model/Market").PaginatedResponse<Market> | PromiseLike<import("../../domains/market/model/Market").PaginatedResponse<Market>> {
//       throw new Error('Method not implemented.');
//   }
//   static post<T>(arg0: string, marketData: CreateMarketRequest): Market | PromiseLike<Market> {
//       throw new Error('Method not implemented.');
//   }
    static async put<T>(endpoint: string, updates: Partial<Market>): Promise<Market | PromiseLike<Market>> {
        try {
            // 确保这里确实发起了真实的fetch请求
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            console.log('HttpClient received:', data);
            return data;
            } catch (error) {
            console.error('HttpClient request failed:', error);
            throw error; // 重要：必须重新抛出错误
            }
        }

    static async get<T>(endpoint: string): Promise<T> {
       try {
        // 确保这里确实发起了真实的fetch请求
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('HttpClient received:', data);
        return data;
        } catch (error) {
        console.error('HttpClient request failed:', error);
        throw error; // 重要：必须重新抛出错误
        }
  }
    static post<T>(endpoint: string, data?: any): Promise<T> {
      throw new Error('Method not implemented.');
  }
  private baseURL: string;
  private defaultOptions: RequestInit;

  constructor(config: HttpClientConfig) {
    this.baseURL = config.baseURL;
    this.defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    };
  }

  // ========== 函数重载签名（只有声明，没有实现体） ==========
  
  // 签名1：分页数据
  async get<T>(endpoint: string, params?: HttpRequestParams): Promise<PaginatedResponse<T>>;
  
  // 签名2：数组数据
  async get<T>(endpoint: string, params?: HttpRequestParams): Promise<T[]>;
  
  // 签名3：单个对象
  async get<T>(endpoint: string, params?: HttpRequestParams): Promise<T>;
  
  // 签名4：通用类型
  async get<T>(endpoint: string, params?: HttpRequestParams, options?: { unwrapData: boolean }): Promise<T>;

  // ========== 实现签名（唯一的实现体） ==========
  async get<T>(
    endpoint: string, 
    params?: HttpRequestParams, 
    options?: { unwrapData?: boolean }
  ): Promise<UnwrapApiResponse<T>> {
    try {
      const url = this.buildUrl(endpoint, params);
      const config = this.mergeConfig({ method: 'GET' });
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      const data: T = await this.parseResponse(response);
      
      // 根据条件类型自动处理返回类型
      return data as UnwrapApiResponse<T>;
      
    } catch (error) {
      console.error(`HTTP GET Request Failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * POST请求
   */
  async post<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const url = this.buildUrl(endpoint);
      const config = this.mergeConfig({
        method: 'POST',
        body: JSON.stringify(data),
      });
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      return await this.parseResponse<T>(response);
      
    } catch (error) {
      console.error(`HTTP POST Request Failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * PUT请求
   */
  async put<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const url = this.buildUrl(endpoint);
      const config = this.mergeConfig({
        method: 'PUT',
        body: JSON.stringify(data),
      });
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      return await this.parseResponse<T>(response);
      
    } catch (error) {
      console.error(`HTTP PUT Request Failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * DELETE请求
   */
  async delete<T>(endpoint: string): Promise<T> {
    try {
      const url = this.buildUrl(endpoint);
      const config = this.mergeConfig({ method: 'DELETE' });
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      return await this.parseResponse<T>(response);
      
    } catch (error) {
      console.error(`HTTP DELETE Request Failed: ${endpoint}`, error);
      throw error;
    }
  }

  /**
   * PATCH请求
   */
  async patch<T>(endpoint: string, data?: any): Promise<T> {
    try {
      const url = this.buildUrl(endpoint);
      const config = this.mergeConfig({
        method: 'PATCH',
        body: JSON.stringify(data),
      });
      
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      return await this.parseResponse<T>(response);
      
    } catch (error) {
      console.error(`HTTP PATCH Request Failed: ${endpoint}`, error);
      throw error;
    }
  }

  // ========== 私有辅助方法 ==========

  /**
   * 构建完整URL
   */
  private buildUrl(endpoint: string, params?: HttpRequestParams): string {
    let url = endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`;
    
    // 添加查询参数
    if (params && typeof params === 'object') {
      const queryParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, String(value));
        }
      });
      const queryString = queryParams.toString();
      if (queryString) {
        url += url.includes('?') ? `&${queryString}` : `?${queryString}`;
      }
    }
    
    return url;
  }

  /**
   * 合并配置
   */
  private mergeConfig(options: RequestInit): RequestInit {
    const token = this.getAuthToken();
    const headers: Record<string, string> = {
      ...this.defaultOptions.headers as Record<string, string>,
      ...options.headers as Record<string, string>,
    };

    // 添加认证token
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return {
      ...this.defaultOptions,
      ...options,
      headers,
    };
  }

  /**
   * 获取认证token
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token') || 
             localStorage.getItem('manifold_token');
    }
    return null;
  }

  /**
   * 解析响应
   */
  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      return response.json();
    }
    
    if (contentType?.includes('text/')) {
      return response.text() as unknown as T;
    }
    
    return response.blob() as unknown as T;
  }

  /**
   * 处理错误响应
   */
  private async handleError(response: Response): Promise<HttpError> {
    let errorData: any;
    
    try {
      errorData = await response.json();
    } catch {
      try {
        errorData = await response.text();
      } catch {
        errorData = response.statusText;
      }
    }

    const error: HttpError = {
      code: `HTTP_${response.status}`,
      message: errorData?.message || response.statusText,
      status: response.status,
      data: errorData,
    };

    throw error;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = this.buildUrl(endpoint);
    const config = this.mergeConfig(options);
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw await this.handleError(response);
      }
      
      // 处理 Mock.js 拦截的响应
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        const data: ApiResponse<T> = await response.json();
        
        // 如果响应包含 code 字段（Mock.js 格式），提取 data
        if (data && typeof data === 'object' && 'code' in data) {
          if (data.code === 200) {
            return data.data as T;
          } else {
            throw {
              code: `API_${data.code}`,
              message: data.message || 'API 错误',
              status: data.code
            };
          }
        }
        
        return data as T;
      }
      
      return await this.parseResponse(response);
      
    } catch (error) {
      console.error(`HTTP 请求失败: ${url}`, error);
      throw error;
    }
  }

}

// 创建全局实例
export const httpClient = new HttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
});