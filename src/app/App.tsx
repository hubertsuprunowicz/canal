import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppRoutes } from 'routing/AppRoutes';
import { ThemeProvider } from 'system';

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
