import * as Flags from "country-flag-icons/react/3x2";
import React from 'react';
import { StyledTeamBadge } from "./TeamBadge.styles.tsx";
import EnglishFlag from "../flags/EnglishFlag.tsx";
import ScottishFlag from "../flags/ScottishFlag.tsx";
import WelshFlag from "../flags/WelshFlag.tsx";
import NorthernIrishFlag from "../flags/NorthernIrishFlag.tsx";

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

    if (props.imagePath?.toUpperCase() === "GB-ENG") {
        return (
            <StyledTeamBadge>
                <EnglishFlag />
            </StyledTeamBadge>
        )
    }

    if (props.imagePath?.toUpperCase() === "GB-WLS") {
        return (
            <StyledTeamBadge>
                <WelshFlag />
            </StyledTeamBadge>
        )
    }

    if (props.imagePath?.toUpperCase() === "GB-SCT") {
        return (
            <StyledTeamBadge>
                <ScottishFlag />
            </StyledTeamBadge>
        )
    }

    if (props.imagePath?.toUpperCase() === "GB-NIR") {
        return (
            <StyledTeamBadge>
                <NorthernIrishFlag />
            </StyledTeamBadge>
        )
    }

    if (props.imagePath?.startsWith("http")) {
        return (
            <StyledTeamBadge>
                <img src={props.imagePath} alt="badge"  ></img>
            </StyledTeamBadge>
        )
    }

    return <span>TBC</span>;
}

export default TeamBadge;
