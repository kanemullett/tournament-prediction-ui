import React from 'react';
import { StyledTeamBadge } from "./TeamBadge.styles.tsx";

interface ITeamBadge {
    imagePath?: string;
}

const TeamBadge = (props: ITeamBadge) => {
    
    if (props.imagePath?.startsWith("http")) {
        return (
            <StyledTeamBadge>
                <img src={props.imagePath} alt="badge"></img>
            </StyledTeamBadge>
        )
    }

    return <span>TBC</span>;
}

export default TeamBadge;
