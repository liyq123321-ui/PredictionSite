import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useMarketStore } from '../stores/marketStore';
import { MarketApi } from '../domains/market/infrastructure/MarketApi';

export const useMarkets = (filters = {}) => {
  return useQuery({
    queryKey: ['api/markets', filters],
    queryFn: () => MarketApi.getMarkets(filters),
    refetchInterval: 15000, // 15秒刷新
  });
};

export const useCreateMarket = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: MarketApi.createMarket,
    onSuccess: (newMarket) => {
      queryClient.invalidateQueries({ queryKey: ['markets'] });
      useMarketStore.getState().addMarket(newMarket);
    },
  });
};