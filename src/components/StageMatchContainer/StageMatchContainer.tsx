import React from "react";
import { SectionHeader, StyledStageMatchContainer } from "./StageMatchContainer.styles.tsx";
import MatchGrid from "../MatchGrid/MatchGrid.tsx";

interface IStageMatchContainer {
    stageName: string;
    matches: Match[];
}

const StageMatchContainer = (props: IStageMatchContainer) => {
    return (
        <StyledStageMatchContainer>
            <SectionHeader>{props.stageName}</SectionHeader>
            <MatchGrid matches={props.matches} />
        </StyledStageMatchContainer>
      );
}

export default StageMatchContainer;
