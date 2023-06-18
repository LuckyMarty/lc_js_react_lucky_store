import React, { useState } from 'react';
// Components
import Tabs from './tabs/Tabs';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';


export default function Dashboard({ tabs }) {
  // States
  const [currentTab, setCurrentTab] = useState(0);

  
  // Handler
  const currentTabContent = () => {
    return tabs[currentTab][1];
  }


  // Render
  return (
    <DashboardStyled>
      <div className='dashboard'>
        <Tabs data={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="content">
          {currentTabContent()}
        </div>
      </div>
    </DashboardStyled>
  )
}


const DashboardStyled = styled.main`
  .dashboard {
    .content {
      padding: ${theme.spacing.md} 0; 
      margin-bottom: ${theme.spacing.md};
    }
  }
`;