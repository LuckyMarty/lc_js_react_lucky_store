import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// Components
import Dashboard from './Dashboard'
import Details from './Details';
import Logout from './components/Logout';
// Style
import { styled } from 'styled-components';
// Context
import UserContext from '../../../context/UserContext';
import SiteContext from '../../../context/SiteContext';
// API & Functions
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage';
import { data } from '../../../api/user';




export default function UserDashboard() {
    // States
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Token
    const localToken = getLocalStorage('access_token');
    const [token, setToken] = useState(localToken);
    // → Data
    const [userData, setUserData] = useState([])
    const tabs = [
        ["", `Welcome to your dashboard ${userData.firstname} ${userData.lastname}!`],
        ["Details", <Details data={userData} token={token} />],
        ["Orders", "Orders"],
        ["Settings", "Settings"]
    ];


    // Handler
    useEffect(() => {
        setToken(localToken);
        data(localToken)
            .then(data => {
                if (data?.error) console.log(data)
                else {
                    setUserData(data.data);

                    if (data.data?.role == "ADMIN") {
                        user.setIsAdmin(true);
                        setLocalStorage("isAdmin", true);
                    }
                }
            })
    }, [site.reload])


    // Render
    return (
        <UserDashboardStyled>
            <div className='links'>
                {user.isAdmin && <Link to={"/admin"}>Go to Admin Dashboard</Link>}
                <Logout />
            </div>
            <Dashboard tabs={tabs} />
        </UserDashboardStyled>
    )
}


const UserDashboardStyled = styled.div`
    .links {
        display: flex;
        justify-content: space-between;
    }
`;