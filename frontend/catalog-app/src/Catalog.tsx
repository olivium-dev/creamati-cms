import React from 'react';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Debug logging for Module Federation
console.log('📦 [Catalog MF] Module loading...');
console.log('📦 [Catalog MF] React version:', React.version);
console.log('📦 [Catalog MF] QueryClient available:', typeof QueryClient);
console.log('📦 [Catalog MF] QueryClientProvider available:', typeof QueryClientProvider);
console.log('📦 [Catalog MF] ThemeProvider available:', typeof ThemeProvider);
console.log('📦 [Catalog MF] createTheme available:', typeof createTheme);

// Create a local QueryClient for this micro-frontend
let queryClient: QueryClient;
try {
  console.log('📦 [Catalog MF] Creating QueryClient...');
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime in v4)
        refetchOnWindowFocus: false,
        retry: 2,
      },
      mutations: {
        retry: 1,
      },
    },
  });
  console.log('✅ [Catalog MF] QueryClient created successfully:', queryClient);
} catch (error) {
  console.error('❌ [Catalog MF] Failed to create QueryClient:', error);
  throw error;
}

// Create a local theme for this micro-frontend
let theme: ReturnType<typeof createTheme>;
try {
  console.log('📦 [Catalog MF] Creating theme...');
  theme = createTheme({
    palette: {
      primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#ff6b6b',
      },
    },
  });
  console.log('✅ [Catalog MF] Theme created successfully');
} catch (error) {
  console.error('❌ [Catalog MF] Failed to create theme:', error);
  throw error;
}

// Export the component for Module Federation
const Catalog: React.FC = () => {
  console.log('🚀 [Catalog MF] Catalog component rendering...');
  
  React.useEffect(() => {
    console.log('✅ [Catalog MF] Catalog component mounted');
    return () => {
      console.log('👋 [Catalog MF] Catalog component unmounting');
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

console.log('📦 [Catalog MF] Catalog component defined, type:', typeof Catalog);
console.log('📦 [Catalog MF] Exporting as default...');

export default Catalog;
