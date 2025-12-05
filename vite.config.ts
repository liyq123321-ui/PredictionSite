import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(),
    viteMockServe({
      mockPath: './src/mocks', // Mock 数据文件目录
      localEnabled: true, // 开发环境启用
      prodEnabled: true, // 生产环境启用
      logger: true, // 显示请求日志
      supportTs: true, // 支持 TypeScript
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});