import React from 'react';
import { type Market } from '../../../domains/market/model/Market';
import { ProbabilityBar } from '../../ui/ProbabilityBar';

interface MarketCardProps {
  market: Market;
  onClick?: (marketId: string) => void;
}

export const MarketCard: React.FC<MarketCardProps> = ({ market, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onClick?.(market.id)}
    >
      <h3 className="font-semibold text-lg mb-2">{market.question}</h3>
      <ProbabilityBar probability={market.probability} />
      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <span>成交量: {market.volume.toLocaleString()}</span>
        {/* <span>{market.createdAt.toLocaleDateString()}</span> */}
      </div>
    </div>
  );
};