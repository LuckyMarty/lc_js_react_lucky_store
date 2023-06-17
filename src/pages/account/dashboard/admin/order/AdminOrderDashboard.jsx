import React, { useContext, useEffect, useState } from 'react';
// Components
import OrderDashboard from './OrderDashboard'
// Context
import SiteContext from '../../../../../context/SiteContext';
import UserContext from '../../../../../context/UserContext';
// API & Functions  
import { getAllOrders } from '../../../../../api/order';


export default function AdminOrderDashboard() {
    // States
    // → Context
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Data
    const [orders, setOrders] = useState([]);


    // Handler
    useEffect(() => {
        getAllOrders(user.logged).then(data => {
            setOrders(data);
        })
    }, [site.reload]);


    // Render
    return (
        <OrderDashboard orders={orders} />
    )
}
