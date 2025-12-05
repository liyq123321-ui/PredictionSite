/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand'
import { type Market } from '../domains/market/model/Market';

interface MarketState {
  markets: Market[];
  currentMarket: Market | null;
  loading: boolean;
  
  // Actions
  setMarkets: (markets: Market[]) => void;
  setCurrentMarket: (market: Market) => void;
  addMarket: (market: Market) => void;
  updateMarketProbability: (marketId: string, probability: number) => void;
}

export const useMarketStore = create<MarketState>((set: any, _get) => ({
  markets: [],
  currentMarket: null,
  loading: false,

  setMarkets: (markets) => set({ markets }),
  
  setCurrentMarket: (market) => set({ currentMarket: market }),
  
  addMarket: (market) => 
    set((state : MarketState) => ({ markets: [market, ...state.markets] })),
    
  updateMarketProbability: (marketId, probability) =>
    set((state : MarketState) => ({
      markets: state.markets.map(m =>
        m.id === marketId ? { ...m, probability } : m
      ),
      currentMarket: state.currentMarket?.id === marketId 
        ? { ...state.currentMarket, probability }
        : state.currentMarket
    }))
}));