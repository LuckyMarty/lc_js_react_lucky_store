import React from 'react'
import { theme } from '../../assets/theme';
import { styled } from 'styled-components';
import search_icon from './assets/search.png'
import MainMenu from './MainMenu';
import MainMenuIcons from './MainMenuIcons';
import Logo from '../../components/reusable/Logo';

export default function Header() {
    return (
        <HeaderStyled>
            <Logo />

            <div>
                <img src={search_icon} alt="" />
                <input type="text" placeholder="Search store" />
            </div>

            <MainMenu />
            <MainMenuIcons />

            
        </HeaderStyled>
    )
}


const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    background: white;

    padding: ${theme.spacing.md} 0;
    margin-bottom: ${theme.spacing.md};
    display: grid;
    grid-template-columns: 250px 2fr 3fr auto;
    align-items: center;

    >* {
        input[type=text] {
            transform: translateY(-5px);
            border: none;

            &::placeholder {
                font-family: 'Circular Std';
                color: $light-gray;
                font-size: $font-size-m;
            }
        }
    }
`;