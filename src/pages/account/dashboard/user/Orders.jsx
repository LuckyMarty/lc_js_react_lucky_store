import React, { useContext, useEffect, useState } from 'react';
// Components
import OrderDashboard from '../admin/order/OrderDashboard';
// Context
import SiteContext from '../../../../context/SiteContext';
import UserContext from '../../../../context/UserContext';
// API & Functions  
import { getOrderByUserId } from '../../../../api/order';
import { getLocalStorage } from '../../../../utils/localStorage';


export default function Orders() {
    // States
    // → Context
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Data
    const [orders, setOrders] = useState([]);
    const [filterByStatus, setFilterByStatus] = useState();


    // Handler
    useEffect(() => {
        getOrderByUserId(user.logged, getLocalStorage('user_id')).then(data => {
            let d = data;
            d.sort((a,b) => {
                if (a.status < b.status && a.status == filterByStatus) return -1
                else if (a.status > b.status && a.status == filterByStatus) return 1
                else return 0
            })
            setOrders(d)
        })
    }, [site.reload, filterByStatus]);


    // Render
    return (
        <OrderDashboard orders={orders} admin={false} filterByStatus={filterByStatus} setFilterByStatus={setFilterByStatus} />
    )
}
