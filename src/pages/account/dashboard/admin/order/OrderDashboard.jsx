import React, { useState } from 'react';
// Components
import AdminDataList from './AdminDataList';
import Order from './Order';
import OrderView from './OrderView';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
// API & Functions


export default function OrderDashboard({ orders, admin = true }) {
    // States
    // → Context
    // → Data
    const [order, setOrder] = useState()
    const headers = ["ID", "Client", "Total", "Payment", "Status", "Date", ""];





    // Render
    return (
        <OrderDashboardStyled>
            {
                !order ? (
                    <AdminDataList headers={headers} >
                        {
                            orders?.map((order, index) => (
                                <Order key={index} data={order} setOrder={setOrder} admin={admin} />
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