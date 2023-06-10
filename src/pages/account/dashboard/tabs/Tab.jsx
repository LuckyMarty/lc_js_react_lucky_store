import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../assets/theme';

export default function Tab({ label }) {
    return (
        <TabStyled>{label}</TabStyled>
    )
}


const TabStyled = styled.div`
    background-color: ${theme.colors.dark};
    color: ${theme.colors.background_white};
    padding: ${theme.spacing.sm};
`;