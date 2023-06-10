import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Quantity from '../../../components/reusable/quantity/Quantity'
import { styled } from 'styled-components';
import { formatPrice, updateCartQuantity } from '../../../utils/functions';
import { theme } from '../../../assets/theme';
import SiteContext from '../../../context/SiteContext';
import { setLocalStorage } from '../../../utils/localStorage';

export default function CartProductList({
    data,
    reload
}) {
    const site = useContext(SiteContext);
    const [quantity, setQuantity] = useState(data.cartquantity);

    const handleRevove = (id) => {
        const newList = site.cart.filter(item => item.id !== id);
        site.setCart(newList);
        setLocalStorage('inCart', newList);
        site.setReload(newList);
    }

    useEffect(() => {
        updateCartQuantity(site, data, quantity);
        reload(quantity);
    }, [quantity])

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

                <div className='delete' onClick={() => handleRevove(data.id)}>delete</div>
            </div>

            <div className="price">
                {formatPrice(quantity * data.price)} €
            </div>
        </CartProductListStyled>
    )
}


const CartProductListStyled = styled.div`
    display: grid;
    grid-template-columns: 75px 2fr 1fr 1fr;
    column-gap: 25px;

    
    border-bottom: 1px solid ${theme.colors.greyLight};
    padding-bottom: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};

    &:last-child {
      border-bottom: none;
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

    .delete {
        margin-top: 25px;
    }
`;