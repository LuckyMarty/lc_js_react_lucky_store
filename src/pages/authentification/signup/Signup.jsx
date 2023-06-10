import React, { useState } from 'react'
import SignupForm from './SignupForm'
import AuthLayout from '../../../layout/page/authentification/AuthLayout'
import { styled } from 'styled-components';

export default function Signup() {
    const [errors, setErrors] = useState(false)

    return (
        <AuthLayout title={"Sign Up"} errors={errors}>
            <SignupStyled>
                <SignupForm setErrors={setErrors}/>
            </SignupStyled>
        </AuthLayout>
    )
}


const SignupStyled = styled.div`
  
`;