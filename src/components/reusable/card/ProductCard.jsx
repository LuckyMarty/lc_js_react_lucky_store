import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../utils/functions';
import SiteContext from '../../../context/SiteContext';

export default function ProductCard({ data }) {
    const site = useContext(SiteContext);


    const handleAddToCart = (item) => {
        addToCart(site, item, 1);
    }

    return (
        <ProductCardStyled>
            <div className='header'>
                <Link to={`/products/${data.id}-${data.name}`}>
                    {/* <img src={`https://picsum.photos/id/${index * 4}/500/500`} /> */}
                    <img src={`https://source.unsplash.com/random/400x400/?img=${data.id}`} />
                </Link>
            </div>

            <div className='body'>
                <div className='info'>
                    <h3 className='title'>{data.name}</h3>
                    <div className='price'>{data.price} €</div>
                </div>
                <div className='button' onClick={() => handleAddToCart(data)}>
                    +
                </div>
            </div>
        </ProductCardStyled>
    )
}


const ProductCardStyled = styled.article`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 100px 10px rgba(0,0,0,.1);
    
        > div {

            &.header {
                height: 200px;
                overflow: hidden;
        
                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }

            &.body {
                display: grid;
                grid-template-columns: 1fr 75px;
                
                > div {
                    &.info {
                        padding: ${theme.spacing.sm};

                        .title {
                            font-size: 14px;
                            font-weight: normal;
                        }
                        
                        .price {
                            font-size: ${theme.fonts.P2};
                            font-weight: bold;
                        }
                    }

                    &.button {
                        font-size: 24px;
                        color: white;

                        border-radius: 15px 0 15px 0;
                        margin-top: 8px;

                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        background-color: ${theme.colors.orange};
                        cursor: pointer;

                        &:hover {
                            background-color: ${theme.colors.primary_burger};
                        }
                    }
                }
            }
        }
`;