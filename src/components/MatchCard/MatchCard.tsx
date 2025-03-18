import React from 'react';
import MatchTeamSection from '../MatchTeamSection/MatchTeamSection.tsx';
import { ButtonContainer, MatchHeader, MatchSubheader, OpenMatchButton, QuickPredictButton, StyledMatchCard } from './MatchCard.styles.tsx';

interface IMatchCard {
    match: Match
}

const MatchCard: React.FC<IMatchCard> = ({ match }) => {
    let formattedDate = "Kickoff Not Set";

    if (match.kickoff != null) {
        const date = new Date(match.kickoff);

        formattedDate = new Intl.DateTimeFormat("en-GB", {
            day: "numeric",   
            month: "long",    
            year: "numeric",  
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(date)
        .replace(" at ", " - ");
    }

    return (
        <StyledMatchCard>
            <MatchHeader>Group A</MatchHeader>
            <MatchSubheader>{formattedDate}</MatchSubheader>
            <MatchTeamSection key={match.id} homeTeam={match?.homeTeam} awayTeam={match?.awayTeam} />

            <ButtonContainer>
                <QuickPredictButton>Predict</QuickPredictButton>
                <OpenMatchButton>More</OpenMatchButton>
            </ButtonContainer>
        </StyledMatchCard>
    );
}

export default MatchCard;
