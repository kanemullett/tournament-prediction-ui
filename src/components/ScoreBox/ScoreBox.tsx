import React from 'react';
import { StyledScoreBox } from "./ScoreBox.styles.tsx";

interface IScoreBox {
    homeGoals?: number
    awayGoals?: number
}

const ScoreBox = (props: IScoreBox) => {
    return (
        <StyledScoreBox>
            <span>{props.homeGoals}</span>
            <span>{props.awayGoals}</span>
        </StyledScoreBox>
    );
}

export default ScoreBox;
