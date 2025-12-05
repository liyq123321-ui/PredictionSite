import { MarketOutcome, MarketStatus, type Market, type TradeRequest } from "./Market";
import type { Order } from "./Order";

// 市场操作引擎 - 处理核心业务逻辑
export class MarketEngine {
  // 计算购买份额（基于简单的对数市场评分规则）
  static calculateShares(amount: number, pool: number, outcome: MarketOutcome): number {
    // 简化版的市场评分规则计算
    // 在实际的Manifold中，这会涉及更复杂的概率计算
    if (outcome === MarketOutcome.YES) {
      return (amount / pool) * 100;
    } else {
      return (amount / (100 - pool)) * 100;
    }
  }

  // 计算当前概率
  static calculateProbability(yesPool: number, noPool: number): number {
    const total = yesPool + noPool;
    return total > 0 ? (yesPool / total) * 100 : 50;
  }

  // 验证市场是否可以交易
  static canTrade(market: Market): boolean {
    const now = new Date();
    return market.status === MarketStatus.OPEN && market.closesAt > now;
  }

  // 验证交易请求
  static validateTradeRequest(request: TradeRequest, userBalance: number): string | null {
    if (request.amount <= 0) {
      return '投资金额必须大于0';
    }
    
    if (request.amount > userBalance) {
      return '余额不足';
    }
    
    if (request.orderType === 'limit' && 
        (request.desiredProbability === undefined || request.desiredProbability <= 0 || request.desiredProbability >= 100)) {
      return '限价单必须指定有效的期望概率（0-100之间）';
    }
    
    return null; // 验证通过
  }
}

// 市场解析器 - 处理市场结算逻辑
export class MarketResolver {
  // 解析市场（确定结果）
  static resolveMarket(market: Market, outcome: string, resolutionProbability?: number): Market {
    return {
      ...market,
      status: MarketStatus.RESOLVED,
      resolvedAt: new Date(),
      resolution: outcome,
      resolutionProbability: resolutionProbability || market.probability
    };
  }

  // 计算用户收益
  static calculatePayout(userOrders: Order[], resolution: string): number {
    let totalPayout = 0;
    
    for (const order of userOrders) {
      if (order.outcome === resolution) {
        // 如果预测正确，获得对应份额的价值
        totalPayout += order.shares;
      }
      // 预测错误则份额作废
    }
    
    return totalPayout;
  }
}