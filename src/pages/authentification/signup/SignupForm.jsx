import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// Style
import { styled } from 'styled-components';
// Layout
import FormLayout from '../../../layout/page/authentification/FormLayout';
// Context
import UserContext from '../../../context/UserContext';
// API & Functions  
import { login, signup } from '../../../api/user';
import { setLocalStorage } from '../../../utils/localStorage';


export default function SignupForm({ setErrors }) {
    // States
    // → Context
    const user = useContext(UserContext);
    // → Data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(false);


    // Handler
    const handleSubmit = () => {
        event.preventDefault();
        if (password == confirmPassword) {
            signup(firstName, lastName, email, password)
                .then(data => {
                    if (data?.error) setErrors(data)
                    else {
                        setErrors(false)
                        setSuccess(true);

                        // Auto Login
                        login(email, password)
                            .then(data => {
                                user.setLogged(data.token);
                                setLocalStorage('access_token', data.token);
                            })
                    }
                });

        }
    }


    // Render
    return (
        <FormLayout>
            {
                !success ? (
                    <SignupFormStyled onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" id="firstname" required
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" id="lastname" required
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmpassword">Password</label>
                            <input type="password" name="confirmpassword" id="confirmpassword" required
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>

                        <input type="submit" value="sign up" />
                    </SignupFormStyled>
                ) : (
                    <SuccessStyled>
                        <div>Your account has been successfully created!</div>

                        <Link to={"/account"}>Access my account</Link>
                    </SuccessStyled>
                )
            }
        </FormLayout>
    )
}

const SignupFormStyled = styled.form`
`;

const SuccessStyled = styled.div`
    text-align: center;

    > * {
        margin-bottom: 25px;
    }
`;