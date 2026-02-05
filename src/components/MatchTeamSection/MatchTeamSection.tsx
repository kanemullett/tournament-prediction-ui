import React from 'react';
import { StyledMatchCard } from './MatchTeamSection.styles.tsx';
import MatchTeam from '../MatchTeam/MatchTeam.tsx';

interface IMatchTeamSection {
    homeTeam?: Team
    awayTeam?: Team
}

const MatchTeamSection = (props: IMatchTeamSection) => {
    return (
        <StyledMatchCard>
            <MatchTeam team={props.homeTeam} />
            V
            <MatchTeam team={props.awayTeam} />
        </StyledMatchCard>
    );
}

export default MatchTeamSection;
