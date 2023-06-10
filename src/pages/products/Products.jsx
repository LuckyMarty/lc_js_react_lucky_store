import React from 'react'
import { styled } from 'styled-components';
import useProduct from '../../hooks/useProduct';
import ProductCard from '../../components/reusable/card/ProductCard';
import ContainerWithLeftSideBar from '../../layout/ContainerWithLeftSideBar';

export default function Products() {
    const products = useProduct();

    document.title = "Products - Lucky Store";

    return (
        <ContainerWithLeftSideBar>
            <ProductsStyled>
                {
                    products.map((product) => (
                        <ProductCard
                            key={product.id}
                            data={product}
                        />
                    ))
                }
            </ProductsStyled>
        </ContainerWithLeftSideBar>
    )
}


const ProductsStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    
    @media (max-width: 1240px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;