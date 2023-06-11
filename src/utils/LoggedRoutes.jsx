import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function LoggedRoutes() {
  const user = useContext(UserContext);
  console.log(user.logged);

  return (
    !user.logged ? <Outlet /> : <Navigate to={"/account"} />
  )
}
