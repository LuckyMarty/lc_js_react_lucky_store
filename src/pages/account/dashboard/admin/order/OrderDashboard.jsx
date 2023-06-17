import React, { useState } from 'react';
// Components
import AdminDataList from './AdminDataList';
import Order from './Order';
import OrderView from './OrderView';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';


export default function OrderDashboard({ orders, admin = true, filterByStatus, setFilterByStatus }) {
    // States
    const [order, setOrder] = useState()
    const headers = ["ID", "Client", "Total", "Payment", "Status", "Date", ""];


    // Render
    return (
        <OrderDashboardStyled>
            {
                !order ? (
                    <>
                        <div>
                            Filter by Status: &nbsp;
                            <select name="status_filter" id="status_filter" value={filterByStatus} onChange={e => setFilterByStatus(e.target.value)}>
                                <option value="">Select Status</option>
                                <option value="In Payment">In Payment</option>
                                <option value="Payment Confirmed">Payment Confirmed</option>
                                <option value="Payment Canceled">Payment Canceled</option>
                                <option value="Refund">Refund</option>
                                <option value="Packages being prepared">Packages Being Prepared</option>
                                <option value="Package Sent">Package Sent</option>
                                <option value="Order Completed">Order Completed</option>
                                <option value="Order Canceled">Order Canceled</option>
                            </select>
                        </div>
                        
                        <AdminDataList headers={headers} >
                            {
                                orders?.map((order, index) => (
                                    <Order key={index} data={order} setOrder={setOrder} admin={admin} />
                                ))
                            }
                        </AdminDataList>
                    </>
                ) : (
                    <OrderView order={order} back={setOrder} />
                )
            }
        </OrderDashboardStyled>
    )
}


const OrderDashboardStyled = styled.div`
  
`;