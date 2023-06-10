import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function useIsLogged() {
    const navigate = useNavigate();
    const user = useContext(UserContext);

    useEffect(() => {
        if (user.logged) {
            navigate("/account");
        } else {
            navigate("/sign-in");
        }
    }, [navigate, user.logged]);
}
