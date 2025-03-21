import * as Flags from "country-flag-icons/react/3x2";
import React from 'react';
import { StyledTeamBadge } from "./TeamBadge.styles.tsx";

interface ITeamBadge {
    imagePath?: string;
}

const TeamBadge = (props: ITeamBadge) => {
    const FlagComponent = props.imagePath 
    ? Flags[props.imagePath.toUpperCase() as keyof typeof Flags] 
    : undefined;

    if (FlagComponent) {
        return (
            <StyledTeamBadge>
                <FlagComponent />
            </StyledTeamBadge>
        );
    }

    return <span>🏳️</span>;
}

export default TeamBadge;
