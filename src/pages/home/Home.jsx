import React, { useEffect } from 'react';
// Components
import ProductCard from '../../components/reusable/card/ProductCard';
// Style
import { css, styled } from 'styled-components';
// Layout
import ContainerWithLeftSideBar from '../../layout/ContainerWithLeftSideBar';
// Hook
import useProduct from '../../hooks/useProduct';
// Assets
import { img } from './assets/img';


const blocks = [];
for (let i = 1; i <= 8; i++) {
    let content = `content-${i}`;
    let src = Object.entries(img)[i - 1][1];
    blocks.push(<div key={i} className={content}><img src={src} /></div>);
}


export default function Home() {
    // Hook
    useEffect(() => {
        document.title = "Lucky Store"
    }, [])

    const products = useProduct();


    // Render
    return (
        <ContainerWithLeftSideBar>
            <HomeStyled>
                <h2>Lastest Products</h2>
                <div className="products">
                    {
                        products.slice(0, 4).map((product) => (
                            <ProductCard
                                key={product.id}
                                data={product}
                            />
                        ))
                    }
                </div>

                <h2>Newest Sections</h2>
                <div className="right">{blocks}</div>
            </HomeStyled>
        </ContainerWithLeftSideBar>
    )
}

const HomeStyled = styled.main`
h2 {
    margin-bottom: 12px;
}

.products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-bottom: 50px;
    
    @media (max-width: 1240px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
}


.right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 20px;
    grid-template-areas:
        'content_1 content_1 content_3 content_4'
        'content_2 content_2 content_3 content_4'
        'content_5 content_6 content_7 content_7'
        'content_5 content_6 content_8 content_8';

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(8, 1fr);
        grid-template-areas:
        'content_1 content_1'
        'content_2 content_2'
        'content_3 content_4'
        'content_3 content_4'
        'content_5 content_6'
        'content_5 content_6'
        'content_7 content_7'
        'content_8 content_8';
    }

    ${gridAreas()}

    >div {
        border-radius: 15px;
        overflow: hidden;

        >img {
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
    }
}
`;


function gridAreas() {
    let styles = '';

    for (let i = 1; i <= 8; i++) {
        styles += `
         .content-${i} {
            grid-area: content_${i};
         }
       `
    }

    return css`${styles}`;
}