import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import LoginForm from './LoginForm';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
// Layout
import AuthLayout from '../../../layout/page/authentification/AuthLayout.jsx'


export default function Login() {
  // States
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