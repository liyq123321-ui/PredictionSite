// MarketApi 主类

// MarketApi 主类
import type { Market, CreateMarketRequest, MarketFilters, Order, TradeRequest, PaginatedResponse } from '../model/Market';

import {HttpClient} from '../../../utils/http/HttpClient';

export class MarketApi {
  // 获取市场列表
  static async getMarkets(filters: MarketFilters = {}): Promise<PaginatedResponse<Market>> {
    const queryParams = new URLSearchParams();
    
    if (filters.category) queryParams.append('category', filters.category);
    if (filters.status) queryParams.append('status', filters.status);
    if (filters.search) queryParams.append('search', filters.search);
    if (filters.page) queryParams.append('page', filters.page.toString());
    if (filters.pageSize) queryParams.append('pageSize', filters.pageSize.toString());
    if (filters.sortBy) queryParams.append('sortBy', filters.sortBy);

    const queryString = queryParams.toString();
    const endpoint = `/api/markets${queryString ? `?${queryString}` : ''}`;
    

    const res = await HttpClient.get<PaginatedResponse<Market>>(endpoint);
    console.log('Received markets response:', res);
    return res as unknown as PaginatedResponse<Market>;
  }

  // 获取单个市场详情
  static async getMarketById(marketId: string): Promise<Market> {
    const res = await HttpClient.get(`/api/markets/${marketId}`);
    return res as unknown as Market;
  }

  // 创建新市场
  static async createMarket(marketData: CreateMarketRequest): Promise<Market> {
    return HttpClient.post<Market>('/api/markets', marketData);
  }

  // 在市场上下单交易
  static async placeOrder(marketId: string, orderData: TradeRequest): Promise<Order> {
    return HttpClient.post<Order>(`/api/markets/${marketId}/orders`, orderData);
  }

  // 获取用户的订单历史
  static async getUserOrders(userId: string, filters: { marketId?: string; type?: string } = {}): Promise<Order[]> {
    const queryParams = new URLSearchParams();
    
    if (filters.marketId) queryParams.append('marketId', filters.marketId);
    if (filters.type) queryParams.append('type', filters.type);

    const queryString = queryParams.toString();
    return HttpClient.get<Order[]>(`/api/users/${userId}/orders${queryString ? `?${queryString}` : ''}`);
  }

  // 获取市场交易历史
  static async getMarketHistory(marketId: string, limit: number = 50): Promise<Order[]> {
    return HttpClient.get<Order[]>(`/api/markets/${marketId}/history?limit=${limit}`);
  }

  // 解析市场（用于搜索或解析URL）
  static async resolveMarket(slugOrId: string): Promise<Market> {
    return HttpClient.get<Market>(`/markets/resolve/${slugOrId}`);
  }

  // 更新市场信息（仅创建者）
  static async updateMarket(marketId: string, updates: Partial<Market>): Promise<Market> {
    return HttpClient.put<Market>(`/api/markets/${marketId}`, updates);
  }

  // 关闭/结算市场
  static async closeMarket(marketId: string, outcome: string): Promise<Market> {
    return HttpClient.post<Market>(`/api/markets/${marketId}/close`, { outcome });
  }

  // 获取用户参与的市场
  static async getUserMarkets(userId: string): Promise<Market[]> {
    return HttpClient.get<Market[]>(`/api/users/${userId}/markets`);
  }
}

export default MarketApi;