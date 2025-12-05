import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import MarketDetailPage from './pages/MarketDetail.tsx';

  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');

  const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
       <Route path="/" element={<App />} />
        <Route path="/market/:marketId" element={<MarketDetailPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
