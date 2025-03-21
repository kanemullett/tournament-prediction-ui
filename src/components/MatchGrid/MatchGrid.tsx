import React from 'react';
import MatchCard from "../MatchCard/MatchCard.tsx";
import { StyledMatchGrid } from './MatchGrid.styles.tsx';

interface IMatchGrid {
    matches: Match[]
}

const MatchGrid = (props: IMatchGrid) => {
    return (
        <StyledMatchGrid>
            {props.matches.map((match) => (
                <MatchCard key={match.id} match={match} />
            ))}
        </StyledMatchGrid>
    );
}

export default MatchGrid;
