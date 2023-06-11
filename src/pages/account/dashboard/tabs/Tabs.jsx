import React from 'react'
// Components
import Tab from './Tab';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../assets/theme/index.js';


export default function Tabs({ data, currentTab, setCurrentTab }) {
    // Handler
    const handleTab = (id) => {
        setCurrentTab(id)
    }


    // Render
    return (
        <TabsStyled>
            {
                data.map((tab, index) => (
                    <Tab onClick={() => handleTab(index)} key={index} label={tab[0]} active={currentTab == index ? true : false} />
                ))
            }
        </TabsStyled>
    )
}


const TabsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
    border-bottom: 2px solid ${theme.colors.dark}
`;