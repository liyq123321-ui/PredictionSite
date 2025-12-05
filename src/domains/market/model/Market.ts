// 基础用户信息
export interface User {
  id: string;
  username: string;
  avatar?: string;
  balance: number;
  createdAt: Date;
}

// 市场状态枚举
export enum MarketStatus {
  OPEN = 'open',
  CLOSED = 'closed',
  RESOLVED = 'resolved'
}

// 市场结果类型
export enum MarketOutcome {
  YES = 'YES',
  NO = 'NO'
  // 对于多元市场，可以扩展为：OPTION_A = 'OPTION_A', OPTION_B = 'OPTION_B', 等
}

// 核心市场接口
export interface Market {
  id: string;
  question: string;
  description?: string;
  probability: number; // 0-100
  volume: number; // 总交易量
  creator?: User;
  outcomes?: string[]; // 例如: ['是', '否'] 或 ['选项A', '选项B', '选项C']
  createdAt?: Date;
  closesAt?: Date; // 市场关闭时间
  status?: MarketStatus;
  tags?: string[];
  liquidity?: number; // 流动性池大小
  
  // 解析相关字段（如果市场已关闭）
  resolvedAt?: Date;
  resolution?: string; // 最终结果
  resolutionProbability?: number; // 解析时的概率
}

// 创建市场的请求体
export interface CreateMarketRequest {
  question: string;
  description?: string;
  outcomes: string[]; // 至少需要两个结果
  closesAt: Date;
  tags?: string[];
  initialLiquidity?: number;
}

// 市场筛选条件
export interface MarketFilters {
  search?: string;
  category?: string;
  status?: MarketStatus;
  creatorId?: string;
  page?: number;
  pageSize?: number;
  sortBy?: 'newest' | 'volume' | 'probability' | 'close-date';
}

// 订单类型定义
export interface Order {
  id: string;
  marketId: string;
  userId: string;
  outcome: MarketOutcome;
  amount: number; // 投资金额
  shares: number; // 获得的份额
  probability: number; // 下单时的概率
  createdAt: Date;
  orderType: 'limit' | 'market';
  status: 'pending' | 'filled' | 'cancelled';
}

// 交易请求体
export interface TradeRequest {
  outcome: MarketOutcome;
  amount: number;
  orderType: 'limit' | 'market';
  desiredProbability?: number; // 对于限价单
}

// API 响应包装类型
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasNext: boolean;
    hasPrev: boolean;
}