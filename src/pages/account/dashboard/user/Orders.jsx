import React, { useContext, useEffect, useState } from 'react'
import OrderDashboard from '../admin/order/OrderDashboard';
import { getOrderByUserId } from '../../../../api/order';
import { getLocalStorage } from '../../../../utils/localStorage';
import SiteContext from '../../../../context/SiteContext';


export default function Orders() {
    const site = useContext(SiteContext);
    const [orders, setOrders] = useState([]);


    // Handler
    useEffect(() => {
        getOrderByUserId(getLocalStorage('user_id')).then(data => {
            setOrders(data);
        })
    }, [site.reload]);

    return (
        <OrderDashboard orders={orders} admin={false} />
    )
}
