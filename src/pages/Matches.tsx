import React from 'react';
import { useMatches } from "../hooks/useMatches.ts";
import MatchCard from '../components/MatchCard/MatchCard.tsx';
import { useParams } from 'react-router-dom';

const Matches = () => {
    const { tournamentId } = useParams<{ tournamentId: string }>();

    const validTournamentId = tournamentId ?? "";
    const { data: matches = [], error, isLoading } = useMatches(validTournamentId, null, null, null);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users</p>;

    console.log(matches[0]);

    return (
        <div>
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      );
}

export default Matches;
