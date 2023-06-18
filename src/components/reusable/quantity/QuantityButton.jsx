import React from 'react';
// Style
import { styled } from 'styled-components';


export default function QuantityButton({ label, onClick }) {
    // Render
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