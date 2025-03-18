import React from 'react';
import { StyledMatchCard } from './MatchTeamSection.styles.tsx';
import MatchTeam from '../MatchTeam/MatchTeam.tsx';

interface IMatchTeamSection {
    homeTeam: Team
    awayTeam: Team
}

const MatchTeamSection: React.FC<IMatchTeamSection> = ({ homeTeam, awayTeam }) => {
    return (
        <StyledMatchCard>
            <MatchTeam team={homeTeam} />
            V
            <MatchTeam team={awayTeam} />
        </StyledMatchCard>
    );
}

export default MatchTeamSection;
