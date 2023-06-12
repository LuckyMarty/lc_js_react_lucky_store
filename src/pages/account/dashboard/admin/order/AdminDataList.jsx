import React, { useContext, useEffect, useState } from 'react';
// Components
import Order from './Order';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Layout
// Context
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { getAllOrders } from '../../../../../api/order';


export default function AdminDataList({ headers, children }) {
    // States
    // → Context
    const site = useContext(SiteContext);
    // → Data
    const [getData, setGetData] = useState([])


    // Handler
    useEffect(() => {
        getAllOrders().then(data => {
            setGetData(data);
        })
    }, [site.reload]);


    // Render
    return (
        <AdminDataListStyled>
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
        grid-template-columns: 1fr repeat(${props => props.headers-1}, 4fr);
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