import React from 'react';
// Components
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
// API & Functions


export default function OrderDashboard() {
    return (
        <OrderDashboardStyled>
            <div className="header">
                <div>ID</div>
                <div>Client</div>
                <div>Total</div>
                <div>Payment</div>
                <div>Status</div>
                <div>Date</div>
                <div>Actions</div>
            </div>

        </OrderDashboardStyled>
    )
}


const OrderDashboardStyled = styled.div`
    .header,
    form {
        display: grid;
        grid-template-columns: 1fr repeat(6, 4fr);
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