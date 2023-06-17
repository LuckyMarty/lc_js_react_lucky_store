import React from 'react';
import { Link } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// API & Functions
import { formatPrice } from '../../../../../utils/functions';


export default function ProductList({ data }) {
    // Render
    return (
        <ProductListStyled>
            <div className='image'>
                <Link to={`/products/${data?.id}-${data?.name}`}>
                    {/* <img src={`https://picsum.photos/id/${index * 4}/500/500`} /> */}
                    <img src={`https://source.unsplash.com/random/400x400/?img=${data?.id}`} />
                </Link>
            </div>

            <div className="info">
                <div>{data?.name}</div>
            </div>

            <div className="quantity">
                {data?.cartquantity}
            </div>


            <div className="unique_price">
                {formatPrice(data?.price)} €
            </div>

            <div className="price">
                {formatPrice(data?.cartquantity * data?.price)} €
            </div>
        </ProductListStyled>
    )
}


const ProductListStyled = styled.div`
    display: grid;
    grid-template-columns: 75px 2fr 1fr 1fr 1fr;
    column-gap: 25px;


    border-bottom: 1px solid ${theme.colors.greyLight};
    padding-bottom: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};

    &:last-child {
        border-bottom: none;
    }

    > div {
        &:nth-child(3) {
        text-align: center;
        }
    }

    .image {
        height: 75px;
        width: 75px;
        border-radius: 8px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .quantity {
        text-align: center;
    }
`;