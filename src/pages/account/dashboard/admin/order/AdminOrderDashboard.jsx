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
    const [filterByStatus, setFilterByStatus] = useState()


    // Handler
    useEffect(() => {
        getAllOrders(user.logged).then(data => {

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
        <OrderDashboard orders={orders} filterByStatus={filterByStatus} setFilterByStatus={setFilterByStatus} />
    )
}
