import React from 'react';
import { Link } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';


export default function ButtonLink({ label, to }) {
    return (
        // Render
        <ButtonLinkStyled>
            <Link to={to}>
                {label}
            </Link>
        </ButtonLinkStyled>
    )
}


const ButtonLinkStyled = styled.span`
    width: fit-content;
    
    a {
        display: block;
        width: fit-content;
        text-decoration: none;
        color: ${theme.colors.background_white};
        border: none;
        padding: ${theme.spacing.sm};
        background-color: ${theme.colors.blue};
        cursor: pointer;
        
        &:hover {
            background-color: ${theme.colors.greySemiDark};
        }
    }
`;