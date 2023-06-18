import React from 'react';
// Style
import { styled } from 'styled-components';
// Assets
import fast from './assets/fast.png';
import change from './assets/on-time.png';
import returnProduct from './assets/product-return.png';
import payment from './assets/credit-card.png';


export default function Reassurance() {
    // Render
    return (
        <ReassuranceStyled>

            <div className="item">
                <img src={fast} />
                <div>Fast Delivery</div>
            </div>

            <div className="item">
                <img src={change} />
                <div>30 days to change your mind</div>
            </div>

            <div className="item">
                <img src={returnProduct} />
                <div>Free Return</div>
            </div>

            <div className="item">
                <img src={payment} />
                <div>Secured Payment</div>
            </div>

        </ReassuranceStyled>
    )
}


const ReassuranceStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 100px 0 50px 0;

    .item {
        text-align: center;

        img {
            width: 50px;
            height: 50px;
            objet-fit: contain;
        }
    }
`;