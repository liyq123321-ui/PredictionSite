/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useMarkets } from '../../hooks/useMarket';
import { useNavigate } from 'react-router-dom';
import type { Market } from '../../domains/market/model/Market';
import { MarketCard } from '../../components/market/MarketCard/MarketCard';
import { MarketCard2 } from '../../components/market/MarketCard1';
import { Navbar } from '../../sections/Navbar';
import { BottomNav } from '../../sections/BottomNav';
import { MainContent } from '../../sections/MainContent';

export const Home: React.FC = () => {
  const { data: markets, isLoading, error } = useMarkets();

  const navigate  = useNavigate();

  if (isLoading) return <div>加载中...</div>;
  if (error) return <div>加载失败: {error.message}</div>;

          console.log('markets', markets?.data.items);

  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-icomoon">

    {/* <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">预测市场3666</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        
      <div className="box-border caret-transparent">
        <div className="fixed box-border caret-transparent z-[1000] right-4 bottom-12"></div>
        <div className="box-border caret-transparent flex flex-col grid-cols-none max-w-[1440px] min-h-[1000px] w-full mx-auto pb-[58px] md:grid md:grid-cols-[repeat(12,minmax(0px,1fr))] md:pb-0">
          <div className="fixed box-border caret-transparent pointer-events-none z-[9999] top-4 bottom-[70px] inset-x-4"></div>
                    <Navbar />
      {/* {(markets?.data.items ?? []).map((market: Market) => (
                // <MarketCard 
        //   key={market.id} 
        //   market={market} 
        //   onClick={(id) => navigate(`/market/${id}`)}
        // />
        <MarketCard2 
          href={`/market/${market.id}`}
          key={market.id}
          avatarAlt={market.id}
          title={market.question}
          avatarSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-11.svg"
          volumeCount={market.volume.toString()}
          traderCount="123"
          traderIconSrc="https://c.animaapp.com/mimg0e4nEiOQOI/assets/icon-12.svg"
          displayType="number"
        />

      ))} */}
      <MainContent />
                </div>
        // <BottomNav />
      </div>
      <div className="box-border caret-transparent"></div>
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden max-w-full w-px" />
      <img className="aspect-[auto_1_/_1] box-border caret-transparent hidden max-w-full w-px" />
{/* 
      </div>
    </div> */}
              </body>
  );
};