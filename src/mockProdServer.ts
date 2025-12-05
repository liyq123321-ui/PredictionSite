// src/mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// 如果您使用的是统一的mock入口文件，例如 '../mock/index'
import mockApis from './mocks/index';

// 如果您的mock文件是多个，可以这样导入
// const modules = import.meta.glob('../mock/**/*.ts', { eager: true });
// const mockModules = Object.values(modules).flat();

export function setupProdMockServer() {
  createProdMockServer([...mockApis]);
}