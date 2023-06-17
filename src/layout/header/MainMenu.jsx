import React from 'react';
import { Link } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
import { theme } from '../../assets/theme';


export default function MainMenu() {
    // Render
    return (
        <MainMenuStyled>
            <ul>
                <li><Link to={"/products"}>Products</Link></li>
                <li>Story</li>
                <li>Manufacturing</li>
                <li>Packaging</li>
            </ul>
        </MainMenuStyled>
    )
}


const MainMenuStyled = styled.nav`
justify-self: end;

ul {
    display: inline-flex;
    list-style: none;
    padding: 0;

    li {
        padding: 0 8px;
        margin: 0 4px;

        a {
            padding: 8px 0;
            color: ${theme.colors.dark};
            text-decoration: none;

            &.active {
                border-bottom: 2px solid ${theme.colors.dark};
            }

            &:hover {
                color: ${theme.colors.greyLight};
            }
        }
    }
}
`;
