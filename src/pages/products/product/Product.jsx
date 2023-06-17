import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Quantity from '../../../components/reusable/quantity/Quantity.jsx';
import Button from '../../../components/reusable/buttom/Button';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
// Context
import SiteContext from '../../../context/SiteContext';
// API & Functions  
import { addToCart } from '../../../utils/functions';
// Hooks
import useProduct from '../../../hooks/useProduct';


export default function Product() {
    // States
    // → Context
    const site = useContext(SiteContext);
    // → Data
    const { productId } = useParams();
    const product = useProduct().find(prod => prod.id == productId.split("-")[0]);
    const [quantity, setQuantity] = useState(1);


    document.title = `${product?.name} - Lucky Store`;


    // Handler
    const handleAddToCart = (item) => {
        addToCart(site, item, quantity);
    }


    // Render
    return (
        <ProductStyled>
            <div className="left">
                <img src={`https://source.unsplash.com/random/800x800/?img=${product?.id}`} />
            </div>

            <div className="right">
                <h2 className="title">{product?.name}</h2>
                <div className="description">{product?.description}</div>
                <div className="price">{product?.price} €</div>

                <Quantity data={product} quantity={quantity} setQuantity={setQuantity} />
                <Button label={"Add to cart"} onClick={() => handleAddToCart(product)} />
            </div>
        </ProductStyled>
    )
}


const ProductStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xl};

    .left {
        > img {
            width: 100%;
        }
    }

    .right {
        > * {
            margin-bottom: ${theme.spacing.md};
        }
    }
`;