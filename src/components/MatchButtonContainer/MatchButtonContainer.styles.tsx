import styled from "styled-components";

export const StyledMatchButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 12px;
`

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
