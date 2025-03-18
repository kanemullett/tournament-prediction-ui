import * as Flags from "country-flag-icons/react/3x2";
import React from 'react';
import { StyledTeamBadge } from "./TeamBadge.styles.tsx";

interface ITeamBadge {
    imagePath?: string;
}

const TeamBadge: React.FC<ITeamBadge> = ({ imagePath = "" }) => {
    const FlagComponent = Flags[imagePath.toUpperCase() as keyof typeof Flags]; // Convert to uppercase for consistency
    if (!FlagComponent) return <span>🏳️</span>; // Default flag if not found
    
    return ( 
        <StyledTeamBadge>
            <FlagComponent />
        </StyledTeamBadge>
    );
}

export default TeamBadge;
