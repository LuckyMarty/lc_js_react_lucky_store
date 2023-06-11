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


    // Render
    return (
        <ProductsStyled>
            <div className="header">
                <div>ID</div>
                <div>Title</div>
                <div>Description</div>
                <div>Quantity</div>
                <div>Price</div>
                <div></div>
            </div>
            {
                products.map((product, index) => (
                    <Product key={index} data={product} />
                ))
            }
        </ProductsStyled>
    )
}


const ProductsStyled = styled.div`
    .header,
    form {
        display: grid;
        grid-template-columns: 1fr repeat(4, 4fr) 1fr;
        gap: 25px;
        padding: 14px;
        border-bottom: 1px solid ${theme.colors.dark};
    }

    .header {
        font-size: ${theme.fonts.P2}
    }

    > div:not(.header) {
        &:nth-child(even) {
            background-color: ${theme.colors.greyLight}
        }

        &:last-child form {
            border: none;
        }
    }
`;