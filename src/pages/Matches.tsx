import React from 'react';
import { useMatches } from "../hooks/useMatches.ts";
import { useParams } from 'react-router-dom';
import TournamentMatchContainer from '../components/TournamentMatchContainer/TournamentMatchContainer.tsx';
import { useTournament } from '../hooks/useTournament.ts';

const Matches = () => {
    const { tournamentId } = useParams<{ tournamentId: string }>();

    const validTournamentId = tournamentId ?? "";
    const { data: matches = [], error, isLoading } = useMatches(validTournamentId, null, null, null);
    const { data: tournament } = useTournament(validTournamentId);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading matches</p>;

    return (
        <>
          <h1>{tournament?.name}</h1>
          <TournamentMatchContainer matches={matches} />
        </>
      );
}

export default Matches;
