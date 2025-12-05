// src/components/market/MarketHeader.tsx
import React from 'react';
import type { Market } from '../../domains/market/model/Market';

interface MarketHeaderProps {
  market: Market;
}

export const MarketHeader: React.FC<MarketHeaderProps> = ({ market }) => {
  // 计算剩余天数
  const calculateDaysRemaining = (closesAt: Date): number => {
    const now = new Date();
    const closeDate = new Date(closesAt);
    const diffTime = closeDate.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const daysRemaining = calculateDaysRemaining(market.closesAt ?? new Date());
  const isResolved = market.status === 'resolved';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              market.status === 'open' 
                ? 'bg-green-100 text-green-800' 
                : market.status === 'closed'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              {market.status === 'open' ? '开放交易' : 
               market.status === 'closed' ? '已关闭' : '已解析'}
            </span>
            {!isResolved && (
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                ⏱️ 剩余 {daysRemaining} 天
              </span>
            )}
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            {market.question}
          </h1>
          
          {market.description && (
            <p className="text-gray-600 mb-4 leading-relaxed">
              {market.description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2">
            {market.tags?.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 min-w-[200px]">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {market.probability}%
            </div>
            <div className="text-sm text-gray-500 mt-1">当前概率</div>
          </div>
        </div>
      </div>
      
      {/* 概率可视化条 */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>0%</span>
          <span className="font-medium">当前: {market.probability}%</span>
          <span>100%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${market.probability}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader;