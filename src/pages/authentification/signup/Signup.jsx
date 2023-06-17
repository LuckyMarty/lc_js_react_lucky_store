import React, { useState } from 'react';
// Components
import SignupForm from './SignupForm';
// Style
import { styled } from 'styled-components';
// Layout
import AuthLayout from '../../../layout/page/authentification/AuthLayout';


export default function Signup() {
    // States
    const [errors, setErrors] = useState(false)


    // Render
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