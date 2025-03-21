import React from "react";
import { MatchSection, SectionHeader, StyledStageMatchContainer } from "./StageMatchContainer.styles.tsx";
import MatchCard from "../MatchCard/MatchCard.tsx";

interface IStageMatchContainer {
    stageName: string;
    matches: Match[];
}

const StageMatchContainer: React.FC<IStageMatchContainer> = ({ stageName, matches }) => {
    return (
        <StyledStageMatchContainer>
            <SectionHeader>{stageName}</SectionHeader>
            <MatchSection>
                {matches.map((match) => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </MatchSection>
        </StyledStageMatchContainer>
      );
}

export default StageMatchContainer;
