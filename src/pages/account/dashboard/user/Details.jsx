import React, { useContext, useState } from 'react'
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
import { setLocalStorage } from '../../../../utils/localStorage';
import { edit } from '../../../../api/user';


export default function Details({ data, token }) {
    // Init
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


    // Functions
    const handleSubmit = (event) => {
        event.preventDefault();

        const newData = {
            firstname,
            lastname,
            email
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

                    <input type="submit" value="Save" />
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
  }
`;