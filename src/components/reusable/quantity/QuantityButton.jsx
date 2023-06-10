import React from 'react'
import { styled } from 'styled-components';

export default function QuantityButton(
    {
        label,
        onClick
    }
) {
    return (
        <QuantityButtonStyled
            onClick={onClick}>
            {label}
        </QuantityButtonStyled>
    )
}


const QuantityButtonStyled = styled.button`
    width: 30px;
    border: none;
`;