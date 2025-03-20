import styled from "styled-components";

export const StyledMatchCard = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 20px;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }
`

export const MatchHeader = styled.span`
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 4px;
`;

export const MatchSubheader = styled.span`
    font-size: 0.9rem;
    font-weight: normal;
    color: #777;
    margin-bottom: 12px;
`;

// Buttons container
export const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;  /* Space between buttons */
    margin-top: 12px;
`;

// Black filled button
export const DetailsButton = styled.button`
    background-color: #333;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background-color: var(--primary-color);
        color: #333
    }
`;

// Hollow button with black border
export const OpenMatchButton = styled.button`
    background-color: transparent;
    color: #333;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 8px 14px;
    border: 2px solid #333;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
`;

export const ScoreBar = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 12px;
`
