import React from 'react'
import { styled } from 'styled-components';
import Tab from './Tab.jsx';

export default function Tabs() {
    return (
        <TabsStyled>
            <Tab label={"Details"} />
            <Tab label={"Orders"} />
            <Tab label={"Settings"} />
        </TabsStyled>
    )
}


const TabsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
`;