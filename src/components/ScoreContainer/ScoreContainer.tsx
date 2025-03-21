import React from 'react';
import { ScoreHeader, StyledScoreContainer } from "./ScoreContainer.styles.tsx";
import ScoreBox from '../ScoreBox/ScoreBox.tsx';

interface IScoreContainer {
    type: string
    homeGoals?: number
    awayGoals?: number
}

const ScoreContainer = (props: IScoreContainer) => {
    return (
        <StyledScoreContainer>
            <ScoreHeader>{props.type}</ScoreHeader>
            <ScoreBox homeGoals={props.homeGoals} awayGoals={props.awayGoals}/>
        </StyledScoreContainer>
    );
}

export default ScoreContainer;
