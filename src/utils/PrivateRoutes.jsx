import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Context
import UserContext from '../context/UserContext';

export default function PrivateRoutes() {
  // States
  const user = useContext(UserContext);


  // Render
  return (
    user.logged ? <Outlet /> : <Navigate to={"/sign-in"} />
  )
}
