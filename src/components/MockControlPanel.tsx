import React from 'react';

export const MockControlPanel: React.FC = () => {
  if (import.meta.env.PROD) return null;
  
  const toggleMock = (enabled: boolean) => {
    localStorage.setItem('disableMock', (!enabled).toString());
    window.location.reload();
  };
  
  const isMockEnabled = localStorage.getItem('disableMock') !== 'true';
  
  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: isMockEnabled ? '#4CAF50' : '#f44336',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      zIndex: 10000,
      cursor: 'pointer'
    }}
    onClick={() => toggleMock(isMockEnabled)}
    title="点击切换 Mock 状态"
    >
      Mock: {isMockEnabled ? '启用' : '禁用'}
    </div>
  );
};