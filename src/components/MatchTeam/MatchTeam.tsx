import React from 'react';
import { StyledMatchTeam } from './MatchTeam.styles.tsx';
import TeamBadge from '../TeamBadge/TeamBadge.tsx';
import { MatchHeader } from '../MatchCard/MatchCard.styles.tsx';

interface IMatchTeam {
    team?: Team
}

const MatchTeam = (props: IMatchTeam) => {
    return (
        <StyledMatchTeam>
            <MatchHeader>{props.team?.name}</MatchHeader>
            <TeamBadge imagePath={props.team?.imagePath}/>
        </StyledMatchTeam>
    );
}

export default MatchTeam;
