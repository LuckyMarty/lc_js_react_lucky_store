import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import Dashboard from '../../Dashboard'
import Products from '../../admin/product/Products';
// Style
import { styled } from 'styled-components';
// API & Functions
import AddProduct from './AddProduct';


export default function ProductDashboard() {
    // States
    const tabs = [
        ["All Products", <Products />],
        ["Add Product", <AddProduct />]
    ];


    // Render
    return (
        <ProductDashboardStyled>
            <Dashboard tabs={tabs} />
            <ToastContainer />
        </ProductDashboardStyled>
    )
}


const ProductDashboardStyled = styled.div`

`;