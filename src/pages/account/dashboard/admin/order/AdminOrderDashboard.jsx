import React, { useContext, useEffect, useState } from 'react'
import OrderDashboard from './OrderDashboard'
import SiteContext from '../../../../../context/SiteContext';
import { getAllOrders } from '../../../../../api/order';
import UserContext from '../../../../../context/UserContext';

export default function AdminOrderDashboard() {
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    const [orders, setOrders] = useState([]);


    // Handler
    useEffect(() => {
        getAllOrders(user.logged).then(data => {
            setOrders(data);
        })
    }, [site.reload]);

    return (
        <OrderDashboard orders={orders} />
    )
}
