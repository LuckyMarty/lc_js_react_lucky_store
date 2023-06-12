import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import Dashboard from './Dashboard'
import Logout from './components/Logout';
import ProductDashboard from './admin/product/ProductDashboard';
import OrderDashboard from './admin/order/OrderDashboard';
// Style
import { styled } from 'styled-components';


export default function AdminDashboard() {
    // States
    const tabs = [
        ["", `This is your Admin Dashboard!`],
        ["Products", <ProductDashboard />],
        ["Orders", <OrderDashboard />]
    ];


    // Handler
    useEffect(() => {
        toast.info(`Admin Mode`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }, [])


    // Render
    return (
        <AdminDashboardStyled>
            <div className='links'>
                <Link to={"/account"}>Go to User Dashboard</Link>
                <Logout />
            </div>
            <Dashboard tabs={tabs} />
            <ToastContainer />
        </AdminDashboardStyled>
    )
}


const AdminDashboardStyled = styled.div`
    .links {
        display: flex;
        justify-content: space-between;
    }
`;