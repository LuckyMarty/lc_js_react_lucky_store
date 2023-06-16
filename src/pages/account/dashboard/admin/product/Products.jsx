import React, { useContext, useEffect, useState } from 'react'
// Components
import Product from './Product';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Context
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { getAllProduct } from '../../../../../api/product';
import AdminDataList from '../order/AdminDataList';


export default function Products() {
    // States
    // → Context
    const site = useContext(SiteContext);
    // → Data
    const [products, setProducts] = useState([])


    // Handler
    useEffect(() => {
        getAllProduct().then(data => {
            setProducts(data);
        })
    }, [site.reload]);

    const headers = ["ID", "Title", "Description", "Quantity", "Price", ""];

    console.log(headers.length);

    // Render
    return (
        <ProductsStyled>
            <AdminDataList headers={headers}>

                {
                    products.map((product, index) => (
                        <Product key={index} data={product} />
                    ))
                }
            </AdminDataList>
        </ProductsStyled>
    )
}


const ProductsStyled = styled.div`

`;