import React, { useEffect, useState } from 'react';
// Components
// Style
import { styled } from 'styled-components';
import { getOrderById } from '../../../../../api/order';
import { theme } from '../../../../../assets/theme';
import ProductList from './ProductList';
import { formatPrice } from '../../../../../utils/functions';
// Layout
// Context
// API & Functions

export default function OrderView({ order, back }) {

    const [orderData, setOrderData] = useState()


    // Handler
    useEffect(() => {
        getOrderById(order).then(data => {
            setOrderData(data);
        })
    }, []);


    return (
        <OrderViewStyled>
            <button onClick={() => back()}>back</button>

            <div className="order-info">
                <div className="left">
                    {orderData?.payment} <br />
                    {orderData?.status}
                </div>

                <div className="right">
                    {orderData?.firstname} {orderData?.lastname} <br />
                    {orderData?.email}
                </div>
            </div>

            <div className="order-header">
                <div>Product</div>
                <div></div>
                <div>Quantity</div>
                <div>Unit Price</div>
                <div>Total Price</div>
            </div>


            {
                orderData && JSON.parse(orderData.products)?.map((product, index) => (
                    <ProductList key={index} data={product} />
                ))
            }


            <div className="order-header">
                <div></div>
                <div></div>
                <div></div>
                <div>Grand Total</div>
                <div>{orderData?.total} €</div>
            </div>
        </OrderViewStyled>
    )
}


const OrderViewStyled = styled.div`
    .order {
        &-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-bottom: 50px;
            padding: 100px 0;
        }

        &-header {
            display: grid;
            grid-template-columns: 75px 2fr 1fr 1fr 1fr;
            column-gap: 25px;

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
`;