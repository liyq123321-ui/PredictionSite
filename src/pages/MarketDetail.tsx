// src/pages/MarketDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Market } from '../domains/market/model/Market';
import { MarketApi } from '../domains/market/infrastructure/MarketApi';
import MarketHeader from '../components/market/MarketHeader';
import MarketStats from '../components/market/MarketStats';
import TradingPanel from '../components/market/TradingPanel';
import CommentsSection from '../components/market/CommentsSection';

const MarketDetailPage: React.FC = () => {
  const { marketId } = useParams<{ marketId: string }>();
  const [market, setMarket] = useState<Market | null>(null);


  useEffect(() => {
    const fetchMarketDetail = async () => {
      try {
    
        if (!marketId) {
          throw new Error('Market ID is missing');
        }
        
        const marketDetail = await MarketApi.getMarketById(marketId);
        setMarket(marketDetail);
      } catch (err) {
        console.error(err);
      } finally {
        console.error('ERROR fetching market detail');
      }
    };

    fetchMarketDetail();
  }, [marketId]);

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (error) {
//     return <ErrorMessage message={error} />;
//   }

//   if (!market) {
//     return <ErrorMessage message="Market not found" />;
//   }

  if (!market) {
    return <div className="max-w-4xl mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <MarketHeader market={market} />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <MarketStats market={market} />
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Market Description</h3>
            <p className="text-gray-700">{market.description || 'No description available'}</p>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <TradingPanel market={market} />
        </div>
      </div>
      
      <CommentsSection marketId={market.id} />
    </div>
  );
};

export default MarketDetailPage;