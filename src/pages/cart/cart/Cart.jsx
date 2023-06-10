import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { formatPrice } from '../../../utils/functions';
import { theme } from '../../../assets/theme';
import CartProductList from './CartProductList';
import Total from './Total';
import SiteContext from '../../../context/SiteContext';

export default function Cart() {
  const site = useContext(SiteContext);
  const [total, setTotal] = useState(0);

  document.title = `Cart - Lucky Store`;

  useEffect(() => {
    // Calculate Total
    let totalPrice = 0;
    if (site.cart !== null) {
      site.cart.forEach(product => {
        totalPrice += product.cartquantity * product.price
      });
      setTotal(totalPrice);
    } 
  }, [site.reload])

  return (
    <CartStyled>
      <div className="left">

        <h2>Cart</h2>

        <div className='header'>
          <div>Product</div>
          <div></div>
          <div>Quantity</div>
          <div>Price</div>
        </div>

        {
          site.cart?.map((product) => (
            <CartProductList
              key={product.id}
              data={product}
              reload={site.setReload}
            />
          ))
        }
      </div>

      <div className="right">
        <Total 
          subtotal={formatPrice(total)} 
          total={formatPrice(total)} 
        />
      </div>
    </CartStyled>
  )
}


const CartStyled = styled.main`
  display: grid;
  grid-template-columns: 4fr 300px;
  gap: 50px;

  .left {
      h2 {
        margin-bottom: ${theme.spacing.md};
      }

      .header {
        display: grid;
        grid-template-columns: 75px 2fr 2fr 1fr;
        column-gap: 25px;
        align-items: center;

        border-bottom: 1px solid ${theme.colors.greyLight};
        padding-bottom: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.md};

        > div {
          &:nth-child(3) {
            text-align: center;
          }
        }
      }
    }
  }
`;