import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Start } from './start';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Start />
  </StrictMode>
);
