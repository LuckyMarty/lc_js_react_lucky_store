import React, { useContext, useEffect } from 'react'
import { setLocalStorage } from '../../../utils/localStorage'
import UserContext from '../../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import useIsLogged from '../../../hooks/useIsLogged';
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import Button from '../../../components/reusable/buttom/Button';
import Tabs from './tabs/Tabs.jsx';

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const handleLogout = () => {
    setLocalStorage('access_token', null);
    user.setLogged(false)
    navigate('/sign-in');
  }

  useIsLogged();

  return (
    <DashboardStyled>
      {
        user.logged && (
          <>
            <div className='dashboard'>
              <Tabs />
              <div className="content">
                blajzbekjlazherahzeiuryaziuler
              </div>
            </div>

            <Button
              onClick={handleLogout}
              label={"Logout"}
            />
          </>
        )
      }
    </DashboardStyled>
  )
}


const DashboardStyled = styled.main`
  .dashboard {
     
    .content {
      padding: ${theme.spacing.md};
      border-bottom: 2px solid ${theme.colors.dark};
      margin-bottom: ${theme.spacing.md};
    }
  }
`;