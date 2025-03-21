import React from 'react';
import { useMatches } from "../hooks/useMatches.ts";
import { useParams } from 'react-router-dom';
import TournamentMatchContainer from '../components/TournamentMatchContainer/TournamentMatchContainer.tsx';

const Matches = () => {
    const { tournamentId } = useParams<{ tournamentId: string }>();

    const validTournamentId = tournamentId ?? "";
    const { data: matches = [], error, isLoading } = useMatches(validTournamentId, null, null, null);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading matches</p>;

    return (
        <TournamentMatchContainer matches={matches} />
      );
}

export default Matches;
