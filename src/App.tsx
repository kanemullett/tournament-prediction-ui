import React from 'react';
import './App.css';
import Matches from './pages/Matches.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Matches />
    </QueryClientProvider>
  );
}

export default App;
