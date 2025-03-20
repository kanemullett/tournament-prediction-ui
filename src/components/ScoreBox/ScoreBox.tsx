import React from 'react';
import { StyledScoreBox } from "./ScoreBox.styles.tsx";

interface IScoreBox {
    homeGoals: number
    awayGoals: number
}

const ScoreBox: React.FC<IScoreBox> = ({ homeGoals, awayGoals }) => {
    return (
        <StyledScoreBox>
            <span>{homeGoals}</span>
            <span>{awayGoals}</span>
        </StyledScoreBox>
    );
}

export default ScoreBox;
