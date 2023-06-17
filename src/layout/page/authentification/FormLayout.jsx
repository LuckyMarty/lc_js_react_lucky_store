import React from 'react';
// Style
import { theme } from '../../../assets/theme';
import { styled } from 'styled-components';


export default function FormLayout({ children }) {
    // Render
    return (
        <FormLayoutStyled>
            {children}
        </FormLayoutStyled>
    )
}

const FormLayoutStyled = styled.div`
    form {
        > div {
            margin-bottom: ${theme.spacing.md};
            display: flex;
            flex-direction: column;
    
            > input {
                border: none;
                border-bottom: 2px solid ${theme.colors.dark};
                padding: 8px;
            }
        }

        > input[type=submit] {
            border: none;
            padding: ${theme.spacing.sm};
            background-color: ${theme.colors.primary};
            float: right;
        }
    }
    
`;