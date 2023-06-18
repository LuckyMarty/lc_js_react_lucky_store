import React from 'react';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';

export default function AuthLayout({
    title,
    errors,
    children
}) {
    // Render
    return (
        <AuthLayoutStyled>
            <h2>{title}</h2>

            {
                errors && (
                    <div className="errors">{errors.error}</div>
                )
            }

            {children}
        </AuthLayoutStyled>
    )
}


const AuthLayoutStyled = styled.main`
    max-width: 300px;
    margin: auto;

    h2 {
    text-align: center;
    margin-bottom: ${theme.spacing.xl};
    }

    .errors {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.red}
    }
`;