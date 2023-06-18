import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Reassurance from './Reassurance';
// Style
import { styled } from 'styled-components';
import { theme } from '../../assets/theme';


export default function Footer() {
    // Render
    return (
        <FooterStyled>
            <Reassurance />

            <hr />

            <div className='body'>
                <div>
                    <div className="h2">Lucky Store</div>
                    <p>Founded in 1999 and the world's most eco-friendly e-commerce site</p>
                </div>

                <div>
                    <div className="h2">Site Map</div>
                    <ul>
                        <li><Link to={"/products"} >Products</Link></li>
                        <li>Story</li>
                        <li>Manufacturing</li>
                        <li>Packaging</li>
                    </ul>
                </div>

                <div>
                    <div className="h2">Informations</div>
                    <p>
                        Lucky Store <br />
                        6, StarGate Street <br />
                        Somewhere on Earth

                        <br />
                        <br />

                        +33 00 11 22 33 44
                    </p>
                </div>
            </div>

            <div className="copyright">©{new Date().getFullYear()} - Lucky Store by Lucky Marty</div>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
  .body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    margin: 50px 0;

    a {
        text-decoration: none;
    }

    .h2 {
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 8px;
    }

    ul {
        margin-left: 14px;
    }
  }

  .copyright {
    text-align: center;
  }
`;