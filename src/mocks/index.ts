/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MockMethod } from 'vite-plugin-mock';
import type { Market, PaginatedResponse } from '../domains/market/model/Market';
import { MarketStatus } from '../domains/market/model/Market';


// // 模拟用户数据
// const mockUsers = [
//   {
//     id: 'user_1',
//     username: 'crypto_analyst',
//     avatar: 'https://images.manifold.markets/ai/ai.png',
//     balance: 50000,
//     createdAt: new Date('2023-01-01')
//   },
//   {
//     id: 'user_2', 
//     username: 'quant_trader',
//     avatar: 'https://images.manifold.markets/ai/ai2.png',
//     balance: 75000,
//     createdAt: new Date('2023-02-01')
//   }
// ];

const mockMarket = (id: number): Market => {
  return {
    id: `market_${id}`,
    question: `这是一个测试预测市场 #${id} 的问题吗？`,
    description: `这是关于第 ${id} 个测试市场的详细描述。`,
    probability: Math.floor(Math.random() * 100),
    volume: Math.floor(Math.random() * 100000),
    creator: {
      id: `user_${id}`,
      username: `用户${id}`,
      balance: 10000,
      createdAt: new Date(),
    },
    outcomes: ['是', '否'],
    createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
    closesAt: new Date(Date.now() + Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000),
    status: MarketStatus.OPEN,
    tags: ['测试', '科技'],
    liquidity: 5000,
  };
};


const generateMockMarkets = (count: number): Market[] => {
  return Array.from({ length: count }, (_, index) => mockMarket(index + 1));
};

// 模拟数据列表
const allMockMarkets = generateMockMarkets(125); // 生成125条数据用于分页演示

console.log('Generated mock markets:', allMockMarkets);

// Mock API 配置
const mockApis: MockMethod[] = [
  // 获取市场列表的接口 (支持分页和搜索)
  {
    url: '/api/markets',
    method: 'get',
    timeout: 500, // 模拟网络延迟
    response: (req: { query: { page?: string; pageSize?: string; search?: string } }) => {
      const page = parseInt(req.query.page || '1');
      const pageSize = parseInt(req.query.pageSize || '10');
      const search = req.query.search || '';

      // 应用搜索过滤
      let filteredMarkets = allMockMarkets;
      if (search) {
        const searchLower = search.toLowerCase();
        filteredMarkets = allMockMarkets.filter(market =>
          market.question.toLowerCase().includes(searchLower)
        );
      }

      // 计算分页
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedMarkets = filteredMarkets.slice(startIndex, endIndex);

      // 构建符合 PaginatedResponse 接口的响应
      const result: PaginatedResponse<Market> = {
        data : {
          items: paginatedMarkets,
          total: filteredMarkets.length,
          page: page,
          pageSize: pageSize,
          hasNext: endIndex < filteredMarkets.length,
          hasPrev: page > 1,
        }
      };

      return {
        code: 200,
        message: 'success',
        data: result,
      };
    },
  },
  // 获取单个市场详情的接口
  {
    url: '/api/markets/:id',
    method: 'get',
    response: (req: { query: { id?: string } }) => {
      const marketId = req.query.id;
      const market = allMockMarkets.find(m => m.id === marketId);
      console.log('Mock API - Fetching market with ID:', allMockMarkets);
      if (!market) {
        return {
          code: 404,
          message: '市场不存在',
        };
      }

      return {
        code: 200,
        message: 'success',
        data: market,
      };
    },
  },
  // 可以继续添加其他接口，比如创建市场、交易等
  // {
  //   url: '/api/markets',
  //   method: 'post',
  //   response: (req) => { ... },
  // },
];

export default mockApis;










// // 生成模拟市场数据
// const generateMockMarkets2 = (count: number): Market[] => {
//   return Mock.mock({
//     [`list|${count}`]: [{
//       'id': '@guid',
//       'question': '@ctitle(10, 50) - 预测市场测试数据?',
//       'description': '@cparagraph(3, 5)',
//       'probability|40-80': 1,
//       'volume|1000-50000': 1,
//       'creator': () => Mock.Random.pick(mockUsers),
//       'outcomes|2': ['是', '否'],
//       'createdAt': '@datetime',
//       'closesAt': () => new Date(Date.now() + Mock.Random.integer(1, 30) * 24 * 60 * 60 * 1000),
//       'status|1': ['open', 'closed', 'resolved'],
//       'tags|1-3': ['加密货币', '科技', '政治', '体育', '娱乐'],
//       'liquidity|5000-20000': 1
//     }]
//   }).list;
// };

// // 配置 Mock.js 全局设置
// Mock.setup({
//   timeout: '200-600' // 模拟网络延迟 200-600ms
// });

// // 拦截 /markets 接口 - 返回分页数据
// Mock.mock(/\/api\/markets(?:\?.*)?$/, 'get', (options: any) => {
//   const urlParams = new URLSearchParams(options.url.split('?')[1]);
//   const page = parseInt(urlParams.get('page') || '1');
//   const pageSize = parseInt(urlParams.get('pageSize') || '10');
//   const search = urlParams.get('search') || '';
  
//   // 生成模拟数据
//   const allMarkets = generateMockMarkets(125);
  
//   // 应用搜索过滤
//   let filteredMarkets = allMarkets;
//   if (search) {
//     filteredMarkets = allMarkets.filter(market => 
//       market.question.toLowerCase().includes(search.toLowerCase())
//     );
//   }
  
//   // 分页计算
//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const paginatedMarkets = filteredMarkets.slice(startIndex, endIndex);
  
//   const response: PaginatedResponse<Market> = {
//     items: paginatedMarkets,
//     total: filteredMarkets.length,
//     page,
//     pageSize,
//     hasNext: endIndex < filteredMarkets.length,
//     hasPrev: page > 1
//   };
  
//   return {
//     code: 200,
//     message: 'success',
//     data: response
//   };
// });

// // 拦截单个市场详情接口
// Mock.mock(/\/api\/markets\/[^/]+$/, 'get', (options: any) => {
//   const marketId = options.url.split('/').pop();
//   const markets = generateMockMarkets(1);
//   const market = { ...markets[0], id: marketId };
  
//   return {
//     code: 200,
//     message: 'success',
//     data: market
//   };
// });

// // 拦截创建市场接口
// Mock.mock(/\/api\/markets$/, 'post', (options: any) => {
//   const body = JSON.parse(options.body);
//   const newMarket: Market = {
//     id: Mock.mock('@guid'),
//     question: body.question,
//     description: body.description,
//     probability: 50, // 初始概率
//     volume: 0,
//     creator: mockUsers[0], // 模拟当前用户
//     outcomes: body.outcomes || ['是', '否'],
//     createdAt: new Date(),
//     closesAt: new Date(body.closesAt),
//     status: MarketStatus.OPEN,
//     tags: body.tags || [],
//     liquidity: body.initialLiquidity || 1000
//   };
  
//   return {
//     code: 201,
//     message: '市场创建成功',
//     data: newMarket
//   };
// });

// console.log('🎯 Mock 服务器已启动 - 拦截 /api/markets 相关请求');