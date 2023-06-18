import React from 'react';
// Style
import { styled } from 'styled-components';
import { theme } from '../../assets/theme';
// Assets  
import { icons } from './assets/icons';


export default function Aside() {
    // Render
    return (
        <AsideStyled>
            <h2>Explore</h2>

            <ul>
                <li><a href="#"><img src={icons.icon1} />New in</a></li>
                <li><a href="#"><img src={icons.icon2} />Clothing</a></li>
                <li><a href="#"><img src={icons.icon3} />Shoes</a></li>
                <li><a href="#"><img src={icons.icon4} />Accessoires</a></li>
                <li><a href="#"><img src={icons.icon5} />Activewear</a></li>
                <li><a href="#"><img src={icons.icon6} />Gifts & Living</a></li>
                <li><a href="#"><img src={icons.icon7} />Inspiration</a></li>
            </ul>
        </AsideStyled>
    )
}


const AsideStyled = styled.aside`
    h1 {
        > a {
            text-decoration: none;
            color: ${theme.colors.dark};
        }
    }

    h2 {
        margin-bottom: ${theme.spacing.xl};
    }

    ul {
        list-style: none;

        li {
            margin-bottom: ${theme.spacing.md};

            &:last-child {
                margin-bottom: 0;
            }

            a {
                color: ${theme.colors.dark};
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 12px;

                &:hover {
                    color: ${theme.colors.greyLight};
                }

                img {
                    width: 20px;
                    height: 20px;
                    object-fit: contain;
                }
            }
        }
    }
`;