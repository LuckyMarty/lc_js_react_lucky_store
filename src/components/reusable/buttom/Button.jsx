import React from 'react';
// Components
// Style
// Layout
// Context
// API & Functions  
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import { Link } from 'react-router-dom';

export default function Button({
    label,
    onClick
}) {
    return (
        <ButtonStyled onClick={onClick}>
            {label}
        </ButtonStyled>
    )
}


const ButtonStyled = styled.button`
    border: none;
    padding: ${theme.spacing.sm};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    
    &:hover {
        background-color: ${theme.colors.greySemiDark};
    }
`;