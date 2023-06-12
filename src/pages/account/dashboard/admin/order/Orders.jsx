import React from 'react';
// Components
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
// API & Functions

export default function Orders() {
    return (
        <OrdersStyled>
            OrdersStyled
        </OrdersStyled>
    )
}


const OrdersStyled = styled.div`
    form {
        input,
        textarea {
            border: 1px solid ${theme.colors.background_white};
            background-color: transparent;
            padding: 8px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: none;
            font-family: ${theme.fontFamily.F1};
            cursor: pointer;
            
            &:hover {
                color: ${theme.colors.white};
                background-color: ${theme.colors.dark};
            }
        }
        
        .save {
            background-color: ${theme.colors.green};
            color: ${theme.colors.white};
        }
        
        .remove {
            background-color: ${theme.colors.red};
            color: ${theme.colors.white};
        }
    }
`;