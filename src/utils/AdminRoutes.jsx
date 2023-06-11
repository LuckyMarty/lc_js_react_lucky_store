import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../context/UserContext';

export default function AdminRoutes() {
  const user = useContext(UserContext);

  return (
    user.logged && user.isAdmin ? <Outlet /> : <Navigate to={"/sign-in"} />
  )
}
