import React, { useContext, useEffect, useState } from 'react';
// Components
import AdminDataList from './AdminDataList';
import Order from './Order';
import OrderView from './OrderView';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { getAllOrders } from '../../../../../api/order';


export default function OrderDashboard() {
    // States
    // → Context
    const site = useContext(SiteContext);
    // → Data
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState()
    const headers = ["ID", "Client", "Total", "Payment", "Status", "Date", ""];


    // Handler
    useEffect(() => {
        getAllOrders().then(data => {
            setOrders(data);
        })
    }, [site.reload]);


    // Render
    return (
        <OrderDashboardStyled>
            {
                !order ? (
                    <AdminDataList headers={headers} >
                        {
                            orders.map((order, index) => (
                                <Order key={index} data={order} setOrder={setOrder} />
                            ))
                        }
                    </AdminDataList>
                ) : (
                    <OrderView order={order} back={setOrder} />
                )
            }
        </OrderDashboardStyled>
    )
}


const OrderDashboardStyled = styled.div`
  
`;