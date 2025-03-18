import React from 'react';
import { useMatches } from "../hooks/useMatches.ts";
import MatchCard from '../components/MatchCard/MatchCard.tsx';

const Matches = () => {
    const { data: matches = [], error, isLoading } = useMatches("e091d1d6-1a71-446c-934a-a048423c46ec", null, null, null);

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
