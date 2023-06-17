import React from 'react';
import { Link } from 'react-router-dom'
// Style
import { styled } from 'styled-components';
import { theme } from '../../assets/theme';


export default function Logo() {
    // Render
    return (
        <LogoStyled>
            <Link to={"/"}>Lucky Store</Link>
        </LogoStyled>
    )
}


const LogoStyled = styled.h1`
    a {
        text-decoration: none;
        color: ${theme.colors.dark};
    }
`;