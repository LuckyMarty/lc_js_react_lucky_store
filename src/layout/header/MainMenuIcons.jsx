import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import user_icon from './assets/user.png'
import shoppingBag_icon from './assets/shopping-bag.png'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import SiteContext from '../../context/SiteContext';

export default function MainMenuIcons() {
    const user = useContext(UserContext);   
    const site = useContext(SiteContext);   

    const [inCartTotalQuantity, setInCartTotalQuantity] = useState(false);

    useEffect(() => {
        let totalQuantity = 0;
        if (site.cart !== null) {
          site.cart.forEach(product => {
            totalQuantity += product.cartquantity;
          });
          setInCartTotalQuantity(totalQuantity);
        } 
    }, [site.reload])
    

    return (
        <MainMenuIconsStyled>
            <ul>
                <li>
                    <Link to={user.logged ? "/account" : "/sign-in"}>
                        <img src={user_icon} alt="user" style={{ height: '22px' }} />
                    </Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                        <img src={shoppingBag_icon} alt="cart" />
                        {inCartTotalQuantity && <span>{inCartTotalQuantity}</span>}
                    </Link>
                </li>
            </ul>
        </MainMenuIconsStyled>
    )
}


const MainMenuIconsStyled = styled.div`
    ul {
        display: inline-flex;
        list-style: none;
        padding: 0;
        margin-left: 14px;
        gap: 14px;
        
        > li {
            a {
                text-decoration: none;

                img {
                    height: 24px;
                    width: auto;
                }
            }
        }
    }
`;
