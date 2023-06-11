import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../context/UserContext';

export default function PrivateRoutes() {
  const user = useContext(UserContext);

  return (
    user.logged ? <Outlet /> : <Navigate to={"/sign-in"} />
  )
}
