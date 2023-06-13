import React, { useContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Style
import { styled } from 'styled-components';
import { theme } from '../../../../../assets/theme';
// Context
import UserContext from '../../../../../context/UserContext';
import SiteContext from '../../../../../context/SiteContext';
// API & Functions
import { edit, remove } from '../../../../../api/product';


export default function Order({ data }) {
    // States
    // → Context
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Data
    const [status, setStatus] = useState(data.status)


    // Handler
    const handleSave = () => {
        const newData = {
            id: data.id,
            name,
            description,
            image: "",
            quantity,
            price
        }

        edit(user.logged, data.id, newData)
            .then(res => {
                if (res !== 1) {
                    toast.error(`Product ${data.id} can't be saved`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else {
                    toast.success(`Product ${data.id} has been successfully saved`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });

            site.setReload(Math.random())
    }

    const handleRemove = () => {
        if (confirm('Are you sure you want to remove?')) {
            remove(user.logged, data.id)
                .then(res => {
                    if (res !== 1) {
                        toast.error(`Product ${data.id} can't be removed`, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    } else {
                        toast.warning(`Product ${data.id} has been successfully removed`, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                });
        } else {
            toast.success(`Action has been canceled`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

            site.setReload(Math.random())
    }    

    // let date = new Date();
    // console.log(date);

    // console.log(new Date());
    // console.log(new Date().toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month:'long', day: 'numeric' }));
    // console.log(new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(new Date()));
    // console.log(new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(Date.parse(data.date)));

    // Render
    return (
        <OrderStyled>
            <form onSubmit={(e) => event.preventDefault()}>
                <div>
                    {data.id}
                </div>

                <div>
                    {data.firstname} {data.lastname}
                </div>

                <div>
                    {data.total}
                </div>

                <div>
                    {data.payment}
                </div>

                <div>
                    <select name="status" id="status">
                        <option value="In Payment">{data.status}</option>
                        <option value="Payment Confrimed">Payment Confrimed</option>
                        <option value="Packages being prepared">Packages being prepared</option>
                        <option value="Package sent">Package sent</option>
                        <option value="Order completed">Order completed</option>
                    </select>
                </div>

                <div>
                    {data.date}
                </div>

                <div>
                    <button className='save' onClick={() => handleSave()} >Save</button>
                    <button className='remove' onClick={() => handleRemove()} >Remove</button>
                </div>
            </form>
            <ToastContainer />
        </OrderStyled>
    )
}


const OrderStyled = styled.div`
    form {
        input,
        textarea {
            border: 1px solid ${theme.colors.background_white};
            background-color: transparent;
            padding: 8px;
        }

        button {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
            border: none;
            font-family: ${theme.fontFamily.F1};
            cursor: pointer;
            
            &:hover {
                color: ${theme.colors.white};
                background-color: ${theme.colors.dark};
            }
        }
        
        .save {
            background-color: ${theme.colors.green};
            color: ${theme.colors.white};
        }
        
        .remove {
            background-color: ${theme.colors.red};
            color: ${theme.colors.white};
        }
    }
`;