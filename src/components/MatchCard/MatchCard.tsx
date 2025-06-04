import React from 'react';
import MatchTeamSection from '../MatchTeamSection/MatchTeamSection.tsx';
import { MatchHeader, MatchSubheader, StyledMatchCard } from './MatchCard.styles.tsx';
import PointsIndicator from '../PointsIndicator/PointsIndicator.tsx';
import MatchButtonContainer from '../MatchButtonContainer/MatchButtonContainer.tsx';
import MatchScoreBar from '../MatchScoreBar/MatchScoreBar.tsx';

interface IMatchCard {
    match: Match
}

const MatchCard = (props: IMatchCard) => {
    let formattedDate = "Kickoff Not Set";

    if (props.match.kickoff != null) {
        const date = new Date(props.match.kickoff);

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
    if (props.match.group != null) {
        cardHeader = props.match.group.name
    }

    if (props.match.round != null) {
        cardHeader = props.match.round.name
    }

    return (
        <StyledMatchCard>
            <MatchHeader>{cardHeader}</MatchHeader>
            <MatchSubheader>{formattedDate}</MatchSubheader>
            <MatchTeamSection homeTeam={props.match.homeTeam} awayTeam={props.match.awayTeam} />

            <MatchButtonContainer />

            <MatchScoreBar prediction={props.match.prediction} result={props.match.result} />

            {props.match.result != null && <PointsIndicator points={props.match.points} size={80} strokeWidth={6} />}
        </StyledMatchCard>
    );
}

export default MatchCard;
