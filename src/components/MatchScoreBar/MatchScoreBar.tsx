import React from 'react';
import { StyledMatchScoreBar } from "./MatchScoreBar.styles.tsx";
import ScoreContainer from '../ScoreContainer/ScoreContainer.tsx';

interface IMatchScoreBar {
    prediction?: MatchOutcome;
    result?: MatchOutcome;
}

const MatchScoreBar = (props: IMatchScoreBar) => {
    return (
        <StyledMatchScoreBar>
            <ScoreContainer type={"prediction"} homeGoals={props.prediction?.homeGoals} awayGoals={props.prediction?.awayGoals}/>
            {props.result != null && <ScoreContainer type={"result"} homeGoals={props.result?.homeGoals} awayGoals={props.result?.awayGoals}/>}
        </StyledMatchScoreBar>
    );
}

export default MatchScoreBar;
