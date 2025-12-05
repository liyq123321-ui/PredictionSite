// src/components/market/MarketStats.tsx
import React from 'react';
import type { Market } from '../../domains/market/model/Market';

interface MarketStatsProps {
  market: Market;
}

export const MarketStats: React.FC<MarketStatsProps> = ({ market }) => {
  const stats = [
    {
      label: '总交易量',
      value: `$${market.volume?.toLocaleString()}`,
      description: '市场总交易金额',
      icon: '📊'
    },
    {
      label: '流动性',
      value: `$${market.liquidity?.toLocaleString()}`,
      description: '当前市场流动性',
      icon: '💧'
    },
    {
      label: '创建者',
      value: market.creator?.username,
      description: '市场创建者',
      icon: '👤'
    },
    {
      label: '参与人数',
      value: Math.floor(market.volume / 100).toLocaleString(),
      description: '预估交易人数',
      icon: '👥'
    }
  ];

  const outcomes = market.outcomes || ['是', '否'];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">市场数据</h3>
      
      {/* 关键统计数据网格 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm font-medium text-gray-700">{stat.label}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
          </div>
        ))}
      </div>
      
      {/* 可能的结果 */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">可能结果</h4>
        <div className="flex flex-wrap gap-2">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-lg">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-blue-900">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* 时间信息 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">创建时间:</span>
          <span className="ml-2 font-medium">
            {market.createdAt ? new Date(market.createdAt).toLocaleDateString('zh-CN') : '—'}
          </span>
        </div>
        <div>
          <span className="text-gray-500">结束时间:</span>
          <span className="ml-2 font-medium">
            {market.closesAt ? new Date(market.closesAt).toLocaleDateString('zh-CN') : '—'}
          </span>
        </div>
        {market.resolvedAt && (
          <div className="md:col-span-2">
            <span className="text-gray-500">解析时间:</span>
            <span className="ml-2 font-medium">
              {new Date(market.resolvedAt).toLocaleDateString('zh-CN')}
            </span>
            {market.resolution && (
              <span className="ml-4 px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                结果: {market.resolution}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketStats;