import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../assets/theme';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../context/UserContext';
import { login } from '../../../api/user';
import FormLayout from '../../../layout/page/authentification/FormLayout';
import { setLocalStorage } from '../../../utils/localStorage';

export default function LoginForm({ setErrors }) {
    const navigate = useNavigate();
    const user = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Functions
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
                    setLocalStorage('access_token', {"token": data.token, "email": data.email});
                    navigate('/account');
                }
            })

    }


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