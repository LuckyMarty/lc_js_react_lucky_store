import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Quantity from '../../../components/reusable/quantity/Quantity';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
// Context
import SiteContext from '../../../context/SiteContext';
// API & Functions
import { formatPrice, updateCartQuantity } from '../../../utils/functions';
import { setLocalStorage } from '../../../utils/localStorage';


export default function CartProductList({ data, reload }) {
    // States
    const site = useContext(SiteContext);
    const [quantity, setQuantity] = useState(data.cartquantity);


    // Handler
    const handleRemove = (id) => {
        const newList = site.cart.filter(item => item.id !== id);
        site.setCart(newList);
        setLocalStorage('inCart', newList);
        site.setReload(newList);
    }


    // Hook
    useEffect(() => {
        updateCartQuantity(site, data, quantity);
        reload(quantity);
    }, [quantity])


    // Render
    return (
        <CartProductListStyled>
            <div className='image'>
                <Link to={`/products/${data.id}-${data.name}`}>
                    {/* <img src={`https://picsum.photos/id/${index * 4}/500/500`} /> */}
                    <img src={`https://source.unsplash.com/random/400x400/?img=${data.id}`} />
                </Link>
            </div>

            <div className="info">
                <div>{data.name}</div>
            </div>

            <div className="quantity">
                <Quantity data={data} quantity={quantity} setQuantity={setQuantity} />

                <div className='delete' onClick={() => handleRemove(data.id)}>delete</div>
            </div>


            <div className="unique_price">
                {formatPrice(data.price)} €
            </div>

            <div className="price">
                {formatPrice(quantity * data.price)} €
            </div>
        </CartProductListStyled>
    )
}


const CartProductListStyled = styled.div`
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
        margin: auto;
    }

    .delete {
        margin-top: 25px;
        cursor: pointer;
    }
`;