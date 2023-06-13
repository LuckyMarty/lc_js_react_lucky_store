import React, { useContext, useEffect, useState } from 'react';
// Components
import Order from './Order';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { getAllOrders } from '../../../../../api/order';
import AdminDataList from './AdminDataList';


export default function OrderDashboard() {
    // States
    // → Context
    const site = useContext(SiteContext);
    // → Data
    const [orders, setOrders] = useState([])


    // Handler
    useEffect(() => {
        getAllOrders().then(data => {
            setOrders(data);
        })
    }, [site.reload]);

    const headers = ["ID", "Client", "Total", "Payment", "Status", "Date", ""];


    // Render
    return (
        <OrderDashboardStyled>
            <AdminDataList headers={headers}>
                {
                    orders.map((order, index) => (
                        <Order key={index} data={order} />
                    ))
                }
            </AdminDataList>
        </OrderDashboardStyled>
    )
}


const OrderDashboardStyled = styled.div`
    .header,
    form {
        display: grid;
        grid-template-columns: 1fr repeat(6, 4fr);
        gap: 25px;
        padding: 14px;
        border-bottom: 1px solid ${theme.colors.dark};
    }

    .header {
        font-size: ${theme.fonts.P2}
    }

    > div:not(.header) {
        &:nth-child(even) {
            background-color: ${theme.colors.greyLight}
        }

        &:last-child form {
            border: none;
        }
    }
`;