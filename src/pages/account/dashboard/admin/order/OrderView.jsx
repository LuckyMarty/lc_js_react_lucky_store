import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ProductList from './ProductList';
import OrderStatus from './OrderStatus';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
import UserContext from '../../../../../context/UserContext';
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { edit, getOrderById } from '../../../../../api/order';
import { formatPrice } from '../../../../../utils/functions';

export default function OrderView({ order, back }) {
    // States
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    const [orderData, setOrderData] = useState()
    const [status, setStatus] = useState()


    // Handler
    useEffect(() => {
        getOrderById(order).then(data => {
            setOrderData(data);
        });



        const newData = {
            id: orderData?.id,
            id_user: orderData?.id_user,
            products: orderData?.products,
            total: orderData?.total,
            payment: orderData?.payment,
            status
        }

        edit(user.logged, orderData?.id, newData)
            .then(res => {
                if (res !== 1) {
                    toast.error(`Order ${orderData?.id} can't be saved`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else if (res === 1) {
                    toast.success(`Order ${orderData?.id} has been successfully saved`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });

        site.setReload(Math.random());
    }, [status]);


    // Render
    return (
        <OrderViewStyled>
            <button onClick={() => back()}>back</button>

            <div className="order-info">
                <div className="left">
                    <b>Order</b>: n°{orderData?.id} <br />
                    <b>Payment Type</b>: {orderData?.payment} <br />
                    <b>Status</b>: <OrderStatus status={status} setStatus={setStatus} onChange={true} />
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
                orderData && JSON.parse(orderData?.products)?.map((product, index) => (
                    <ProductList key={index} data={product} />
                ))
            }


            <div className="order-header">
                <div></div>
                <div></div>
                <div></div>
                <div><b>Grand Total</b></div>
                <div><b>{orderData?.total} €</b></div>
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