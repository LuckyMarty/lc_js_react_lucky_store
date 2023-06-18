import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
// Context
import SiteContext from '../../../context/SiteContext';
// API & Functions  
import { addToCart } from '../../../utils/functions';


export default function ProductCard({ data }) {
    // States
    const site = useContext(SiteContext);


    // Hanlder
    const handleAddToCart = (item) => {
        addToCart(site, item, 1);
    }


    // Render
    return (
        <ProductCardStyled>
            <div className='header'>
                <Link to={`/products/${data.id}-${data.name}`}>
                    <img src={data?.image ? data?.image : `https://source.unsplash.com/random/800x800/?img=${data?.id}`} />
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
                            background-color: ${theme.colors.primary};
                        }
                    }
                }
            }
        }
`;