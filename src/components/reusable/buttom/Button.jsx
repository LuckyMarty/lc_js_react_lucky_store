import React from 'react';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';


export default function Button({ label, onClick }) {
    return (
        // Render
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