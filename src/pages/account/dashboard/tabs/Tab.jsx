import React from 'react';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../assets/theme';




export default function Tab({ label, onClick, active }) {
    // Render
    return (
        <TabStyled onClick={onClick} className={active && 'active'} >{label}</TabStyled>
    )
}


const TabStyled = styled.div`
    padding: ${theme.spacing.sm};
    cursor: pointer;
    color: ${theme.colors.dark};
    background-color: transparent;
    border: 2px solid ${theme.colors.dark};
    border-bottom: none;

    &.active {
        background-color: ${theme.colors.dark};
        color: ${theme.colors.background_white};
    }
`;