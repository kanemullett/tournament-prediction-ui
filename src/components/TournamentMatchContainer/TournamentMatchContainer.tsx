import React from 'react';
import { StyledTournamentMatchController } from "./TournamentMatchContainer.styles.tsx";
import StageMatchContainer from '../StageMatchContainer/StageMatchContainer.tsx';

interface ITournamentMatchContainer {
    matches: Match[]
}

const TournamentMatchContainer = (props: ITournamentMatchContainer) => {
    const groups: Group[] = [...new Map(
      props.matches
        .map((match) => match.group)
        .filter((group): group is Group => group !== undefined)
        .map(group => [group.id, group])
    ).values()]
    .sort((a, b) => a.name.localeCompare(b.name));
  
      const rounds: Round[] = [...new Map(
        (
          props.matches.map((match) => match.round)
          .filter((round) => round !== undefined)
        ).map(round => [round.id, round])
      ).values()];

    return (
        <StyledTournamentMatchController>
            {groups.map((group) => (
                <StageMatchContainer stageName={group.name} matches={props.matches.filter((match) => match.group?.id === group.id)}/>
            ))}
            {rounds.map((round) => (
                <StageMatchContainer stageName={round.name} matches={props.matches.filter((match) => match.round?.id === round.id)} />
            ))}
        </StyledTournamentMatchController>
    );
}

export default TournamentMatchContainer;
