import Mock from 'mockjs';

// 检查是否应该启用 Mock
const shouldEnableMock = () => {
//   // 方式1: 通过环境变量控制
//   if (import.meta.env.MODE === 'production') {
//     return false;
//   }
  
//   // 方式2: 通过 URL 参数控制
//   const urlParams = new URLSearchParams(window.location.search);
//   if (urlParams.get('disableMock') === 'true') {
//     return false;
//   }
  
//   // 方式3: 通过 localStorage 控制（开发时方便切换）
//   if (localStorage.getItem('disableMock') === 'true') {
//     return false;
//   }
  
  return true;
};

export const setupMocks = async () => {
  if (!shouldEnableMock()) {
    console.log('🚫 Mock 服务器已禁用');
    return;
  }
  
  // 动态导入 Mock 配置
  const { default: mockConfig } = await import('./index');
  console.log('✅ Mock 服务器已启用');
  
  return mockConfig;
};