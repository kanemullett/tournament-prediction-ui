import React from 'react';
import './App.css';
import Matches from './pages/Matches.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateTournament from './pages/CreateTournament.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/tournaments/new' element={<CreateTournament />} />
          <Route path="/tournaments/:tournamentId/matches" element={<Matches />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
