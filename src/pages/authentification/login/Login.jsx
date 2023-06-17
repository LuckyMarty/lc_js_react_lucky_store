import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import useIsLogged from '../../../hooks/useIsLogged';
import { useState } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import AuthLayout from '../../../layout/page/authentification/AuthLayout.jsx'

export default function Login() {
  // Init
  const [errors, setErrors] = useState(false)


  // Render
  return (
    <AuthLayout title={"Login"} errors={errors}>
      <LoginStyled>
        <LoginForm setErrors={setErrors} />
        <Link to={"/sign-up"}>No account yet? Sign-Up now!</Link>
      </LoginStyled>
    </AuthLayout>
  )
}


const LoginStyled = styled.div`

`;