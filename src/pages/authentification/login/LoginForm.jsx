import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
// Layout
import FormLayout from '../../../layout/page/authentification/FormLayout';
// Context
import UserContext from '../../../context/UserContext';
// API & Functions  
import { login } from '../../../api/user';
import { setLocalStorage } from '../../../utils/localStorage';


export default function LoginForm({ setErrors }) {
    // States
    const navigate = useNavigate();
    // → Context
    const user = useContext(UserContext);
    // → Data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Handler
    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    }

    const handlePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        login(email, password)
            .then(data => {
                if (data?.error) setErrors(data)
                else {
                    user.setLogged(data.token);
                    setLocalStorage('access_token', data.token);
                    setLocalStorage('user_id', data.id);
                    navigate('/account');
                }
            })

    }


    // Render
    return (
        <FormLayout>
            <LoginFormStyled onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <input type="submit" value="Sign In" />
            </LoginFormStyled>
        </FormLayout>
    )
}


const LoginFormStyled = styled.form`

`;