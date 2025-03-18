import React from 'react';
import { StyledMatchTeam } from './MatchTeam.styles.tsx';
import TeamBadge from '../TeamBadge/TeamBadge.tsx';
import { MatchHeader } from '../MatchCard/MatchCard.styles.tsx';

interface IMatchTeam {
    team: Team
}

const MatchTeam: React.FC<IMatchTeam> = ({ team }) => {
    return (
        <StyledMatchTeam>
            <MatchHeader>{team?.name}</MatchHeader>
            <TeamBadge imagePath={team?.imagePath}/>
        </StyledMatchTeam>
    );
}

export default MatchTeam;
