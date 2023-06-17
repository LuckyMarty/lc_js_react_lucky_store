import React, { useContext, useEffect, useState } from 'react'
import OrderDashboard from '../admin/order/OrderDashboard';
import { getOrderByUserId } from '../../../../api/order';
import { getLocalStorage } from '../../../../utils/localStorage';
import SiteContext from '../../../../context/SiteContext';
import UserContext from '../../../../context/UserContext';


export default function Orders() {
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    const [orders, setOrders] = useState([]);


    // Handler
    useEffect(() => {
        getOrderByUserId(user.logged, getLocalStorage('user_id')).then(data => {
            setOrders(data);
        })
    }, [site.reload]);

    return (
        <OrderDashboard orders={orders} admin={false} />
    )
}
