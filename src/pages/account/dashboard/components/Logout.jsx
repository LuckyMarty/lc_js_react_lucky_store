import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Button from '../../../../components/reusable/buttom/Button';
// Context
import UserContext from '../../../../context/UserContext';
// API & Functions
import { setLocalStorage } from '../../../../utils/localStorage';


export default function Logout() {
    // States
    const navigate = useNavigate();
    const user = useContext(UserContext);


    // Handler
    const handleLogout = () => {
        setLocalStorage('access_token', null);
        setLocalStorage('isAdmin', false);

        user.setLogged(false);
        user.setIsAdmin(false);

        navigate('/sign-in');
    }


    // Render
    return (
        <Button
            onClick={handleLogout}
            label={"Logout"}
        />
    )
}
