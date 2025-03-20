import React from 'react';
import { ScoreHeader, StyledScoreContainer } from "./ScoreContainer.styles.tsx";
import ScoreBox from '../ScoreBox/ScoreBox.tsx';

interface IScoreContainer {
    type: string
    homeGoals: number
    awayGoals: number
}

const ScoreContainer: React.FC<IScoreContainer> = ({ type, homeGoals, awayGoals }) => {
    return (
        <StyledScoreContainer>
            <ScoreHeader>{type}</ScoreHeader>
            <ScoreBox type={type} homeGoals={homeGoals} awayGoals={awayGoals}/>
        </StyledScoreContainer>
    );
}

export default ScoreContainer;
