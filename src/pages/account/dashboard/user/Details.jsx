import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
// Components
import Messages from '../../../../components/reusable/Messages';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../assets/theme';
// Layout
import FormLayout from '../../../../layout/page/authentification/FormLayout';
// Context
import UserContext from '../../../../context/UserContext';
import SiteContext from '../../../../context/SiteContext';
// API & Functions
import { getLocalStorage, setLocalStorage } from '../../../../utils/localStorage';
import { edit, remove } from '../../../../api/user';


export default function Details({ data, token }) {
    // States
    const navigate = useNavigate();
    // → Context
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Messages
    const [errors, setErrors] = useState(false);
    const [success, setSuccess] = useState(false)
    // → Data
    const [firstname, setFirstname] = useState(data.firstname);
    const [lastname, setLastname] = useState(data.lastname);
    const [email, setEmail] = useState(data.email);
    const [password, setPassword] = useState()


    // Handler
    const handleSubmit = (event) => {
        event.preventDefault();

        const newData = {
            firstname,
            lastname,
            email,
            password
        }

        edit(token, 'details', newData)
            .then(data => {
                if (data?.error) {
                    setErrors(data)
                    setSuccess(false)
                }

                else {
                    setErrors(false)
                    setSuccess(data.success)
                    user.setLogged(data.token);
                    setLocalStorage('access_token', data.token);
                    site.setReload(newData);
                }
            });
    }


    const handleDelete = (event) => {
        event.preventDefault();

        remove(token, getLocalStorage('user_id'), email)
            .then(data => {
                if (data?.error) {
                    // setErrors(data)
                    console.log(data)
                }

                else {
                    setErrors(false);
                    user.setLogged(false);
                    user.setIsAdmin(false);

                    setLocalStorage('user_id', "");
                    setLocalStorage('access_token', null);
                    setLocalStorage('isAdmin', false);

                    navigate('/sign-in');
                    
                    site.setReload(Math.random());
                }
            });
    }


    // Render
    return (
        <DetailsStyled>
            <FormLayout>
                <Messages errors={errors} success={success} />

                <form onSubmit={(event) => handleSubmit(event)}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name='firstname' id='firstname' value={firstname} onChange={e => setFirstname(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name='lastname' id='lastname' value={lastname} onChange={e => setLastname(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <input type="submit" value="Save" />
                    <input type="button" value="Delete My Acccount" onClick={e => handleDelete(e)} />
                </form>
            </FormLayout>
        </DetailsStyled>
    )
}


const DetailsStyled = styled.main`
  form {
    width: 300px;

    input[type="submit"] {
        float: inherit;
    }
    
    input[type="button"] {
        border: none;
        padding: 12px;
        margin-left: 25px;
        background-color: red;
    }
  }
`;