import React from 'react';
import { useMatches } from "../hooks/useMatches.ts";
import { useParams } from 'react-router-dom';
import StageMatchContainer from '../components/StageMatchContainer/StageMatchContainer.tsx';
import { Hello } from '../components/StageMatchContainer/StageMatchContainer.styles.tsx';

const Matches = () => {
    const { tournamentId } = useParams<{ tournamentId: string }>();

    const validTournamentId = tournamentId ?? "";
    const { data: matches = [], error, isLoading } = useMatches(validTournamentId, null, null, null);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading matches</p>;

    const groups: Group[] = [...new Map(
      (
        matches.map((match) => match.group)
        .filter((group) => group !== undefined)
      ).map(group => [group.id, group])
    ).values()];

    const rounds: Round[] = [...new Map(
      (
        matches.map((match) => match.round)
        .filter((round) => round !== undefined)
      ).map(round => [round.id, round])
    ).values()];

    return (
        <Hello>
          {groups.map((group) => (
            <StageMatchContainer key={group.id} stageName={group.name} matches={matches.filter((match) => match.group?.id === group.id)} />
          ))}
          {rounds.map((round) => (
            <StageMatchContainer key={round.id} stageName={round.name} matches={matches.filter((match) => match.round?.id === round.id)} />
          ))}
        </Hello>
      );
}

export default Matches;
