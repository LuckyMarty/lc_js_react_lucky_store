import React from 'react';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';


export default function AdminDataList({ headers, children }) {
    // Render
    return (
        <AdminDataListStyled columns={headers.length}>
            <div className="header">
                {
                    headers.map((header, index) => (
                        <div key={index}>{header}</div>
                    ))
                }
            </div>
            {children}

        </AdminDataListStyled>
    )
}


const AdminDataListStyled = styled.div`
    .header,
    form {
        display: grid;
        grid-template-columns: 1fr repeat(${props => props.columns - 1}, 4fr);
        gap: 25px;
        padding: 14px;
        border-bottom: 1px solid ${theme.colors.dark};
    }

    .header {
        font-size: ${theme.fonts.P2};
        position: sticky;
        top: 78px;
        background: white;
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