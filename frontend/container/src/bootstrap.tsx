import React from 'react';
import ReactDOM from 'react-dom/client';
// IMPORTANT: Import shared dependencies directly to ensure they're loaded 
// BEFORE any remote micro-frontends try to consume them.
// This fixes Module Federation shared dependency initialization issues.
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import App from './App';
import { ThemeProvider } from '../../shared-ui-lib/src/components/ThemeProvider';
import { ReactQueryProvider } from '../../shared-ui-lib/src';
import { CssBaseline } from '@mui/material';

// Force shared dependencies to be initialized before remotes load
console.log('📦 Shared dependencies loaded:', {
  '@tanstack/react-query': typeof QueryClient,
  'axios': typeof axios,
});

console.log('🚀 Bootstrap: Starting React app...');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <ThemeProvider defaultMode="light" enableCSSVariables>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ReactQueryProvider>
  </React.StrictMode>
);

console.log('✅ Bootstrap: React app rendered');

// Expose React for testing
(window as any).React = React;
(window as any).ReactDOM = ReactDOM;
