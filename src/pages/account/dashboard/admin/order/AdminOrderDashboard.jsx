import React, { useContext, useEffect, useState } from 'react'
import OrderDashboard from './OrderDashboard'
import SiteContext from '../../../../../context/SiteContext';
import { getAllOrders } from '../../../../../api/order';

export default function AdminOrderDashboard() {
    const site = useContext(SiteContext);
    const [orders, setOrders] = useState([]);


    // Handler
    useEffect(() => {
        getAllOrders().then(data => {
            setOrders(data);
        })
    }, [site.reload]);

    return (
        <OrderDashboard orders={orders} />
    )
}
