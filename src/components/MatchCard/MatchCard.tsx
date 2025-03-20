import React from 'react';
import MatchTeamSection from '../MatchTeamSection/MatchTeamSection.tsx';
import { ButtonContainer, MatchHeader, MatchSubheader, OpenMatchButton, DetailsButton, ScoreBar, StyledMatchCard } from './MatchCard.styles.tsx';
import ScoreContainer from '../ScoreContainer/ScoreContainer.tsx';
import PointsIndicator from '../PointsIndicator/PointsIndicator.tsx';

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

    let cardHeader: string = "Matchday"
    if (match.group != null) {
        cardHeader = match.group.name
    }

    if (match.round != null) {
        cardHeader = match.round.name
    }

    return (
        <StyledMatchCard>
            <MatchHeader>{cardHeader}</MatchHeader>
            <MatchSubheader>{formattedDate}</MatchSubheader>
            <MatchTeamSection key={match.id} homeTeam={match?.homeTeam} awayTeam={match?.awayTeam} />

            <ButtonContainer>
                <DetailsButton>More Info</DetailsButton>
            </ButtonContainer>

            <ScoreBar>
                <ScoreContainer type={"prediction"} homeGoals={match?.prediction?.homeGoals} awayGoals={match?.prediction?.awayGoals}/>
                <ScoreContainer type={"result"} homeGoals={match?.result?.homeGoals} awayGoals={match?.result?.awayGoals}/>
            </ScoreBar>

            <PointsIndicator points={1} size={80} strokeWidth={6} />
        </StyledMatchCard>
    );
}

export default MatchCard;
