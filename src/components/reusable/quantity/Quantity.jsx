import React, { useState } from 'react'
import QuantityButton from './QuantityButton'
import { styled } from 'styled-components';

export default function Quantity({ 
    data,
    quantity,
    setQuantity 
}) {


    const handleMinus = (event) => {
        if (quantity != 1) setQuantity(quantity - 1);
    }

    const handlePlus = (event) => {
        if (quantity != data.quantity) setQuantity(quantity + 1);
    }

    const handleQuantity = (event) => {
        const value = event.target.value;
        if (value > 0 && value <= data.quantity) setQuantity(value);
        else alert("Reached Quantity Limit");
    }

    return (
        <QuantityStyled>
            <QuantityButton
                label={"-"}
                onClick={(event) => handleMinus(event)}
            />
            <input type="number" name="quantity" id="quantity"
                value={quantity}
                onChange={(event) => { handleQuantity(event) }}
                min={1}
                max={data?.quantity}
                step={1}
            />
            <QuantityButton
                label={"+"}
                onClick={(event) => handlePlus(event)}
            />
        </QuantityStyled>
    )
}


const QuantityStyled = styled.div`
    height: 30px;
    display: flex;
    
    > * {
        height: 100%;
    }
    
    #quantity {
        text-align: center;
        width: 50px;
        
        &::-webkit-inner-spin-button, 
        &::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
    }
`;