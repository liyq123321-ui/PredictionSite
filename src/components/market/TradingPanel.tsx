// src/components/market/TradingPanel.tsx
import React, { useState } from 'react';
import type { Market } from '../../domains/market/model/Market';

interface TradingPanelProps {
  market: Market;
}

export const TradingPanel: React.FC<TradingPanelProps> = ({ market }) => {
  const [selectedOutcome, setSelectedOutcome] = useState<string>(market.outcomes?.[0] || '');
  const [amount, setAmount] = useState<number>(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [limitProbability, setLimitProbability] = useState<number>(market.probability);

  // 计算交易成本与预期回报
  const calculateTradeDetails = () => {
    if (!market.outcomes || market.outcomes.length === 0) {
      return { cost: 0, potentialPayout: 0, roi: 0 };
    }
    
    if (selectedOutcome === market.outcomes[0]) { // "是" 的选项
      const cost = amount * (market.probability / 100);
      const potentialPayout = amount - cost;
      const roi = (potentialPayout / cost) * 100;
      return { cost, potentialPayout, roi };
    } else { // "否" 的选项
      const cost = amount * ((100 - market.probability) / 100);
      const potentialPayout = amount - cost;
      const roi = (potentialPayout / cost) * 100;
      return { cost, potentialPayout, roi };
    }
  };

  const { cost, potentialPayout, roi } = calculateTradeDetails();

  const handleTrade = async () => {
    if (amount <= 0) {
      alert('请输入有效的交易金额');
      return;
    }

    setIsSubmitting(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('执行交易:', {
        marketId: market.id,
        outcome: selectedOutcome,
        amount,
        orderType,
        limitProbability: orderType === 'limit' ? limitProbability : undefined
      });
      
      alert('交易提交成功！');
      setAmount(100); // 重置金额
    } catch (error) {
      console.error('交易失败:', error);
      alert('交易失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canTrade = market.status === 'open' && amount > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">交易面板</h3>
      
      {/* 交易类型选择 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">订单类型</label>
        <div className="flex gap-2">
          <button
            onClick={() => setOrderType('market')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              orderType === 'market'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            市价单
          </button>
          <button
            onClick={() => setOrderType('limit')}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              orderType === 'limit'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            限价单
          </button>
        </div>
      </div>

      {/* 限价单概率设置 */}
      {orderType === 'limit' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            期望概率: {limitProbability}%
          </label>
          <input
            type="range"
            min="1"
            max="99"
            value={limitProbability}
            onChange={(e) => setLimitProbability(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}

      {/* 结果选择 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">预测结果</label>
        <div className="grid grid-cols-2 gap-2">
          {market.outcomes?.map((outcome, index) => (
            <button
              key={index}
              onClick={() => setSelectedOutcome(outcome)}
              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                selectedOutcome === outcome
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {outcome}
            </button>
          ))}
        </div>
      </div>

      {/* 金额输入 */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">投资金额 ($)</label>
        <input
          type="number"
          min="1"
          max="10000"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder="输入金额"
        />
        <div className="flex gap-2 mt-2">
          {[100, 500, 1000].map((quickAmount) => (
            <button
              key={quickAmount}
              onClick={() => setAmount(quickAmount)}
              className="flex-1 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded text-gray-700"
            >
              ${quickAmount}
            </button>
          ))}
        </div>
      </div>

      {/* 交易详情 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">预估成本:</span>
            <span className="font-medium">${cost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">潜在收益:</span>
            <span className="font-medium text-green-600">+${potentialPayout.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">预期回报率:</span>
            <span className="font-medium text-green-600">{roi.toFixed(1)}%</span>
          </div>
        </div>
      </div>

      {/* 交易按钮 */}
      <button
        onClick={handleTrade}
        disabled={!canTrade || isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            处理中...
          </span>
        ) : (
          `确认交易 $${selectedOutcome}`
        )}
      </button>

      {market.status !== 'open' && (
        <div className="mt-3 text-center text-sm text-yellow-600">
          该市场已{market.status === 'closed' ? '关闭' : '解析'}，无法交易
        </div>
      )}
    </div>
  );
};

export default TradingPanel;