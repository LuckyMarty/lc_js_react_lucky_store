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
import { edit, remove } from '../../../../../api/order';
import OrderStatus from './OrderStatus';


export default function Order({ data, setOrder, admin }) {
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
            id_user: data.id_user,
            products: data.products,
            total: data.total,
            payment: data.payment,
            status
        }

        edit(user.logged, data.id, newData)
            .then(res => {
                if (res !== 1) {
                    toast.error(`Order ${data.id} can't be saved`, {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                } else if (res === 1) {
                    toast.success(`Order ${data.id} has been successfully saved`, {
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

        site.setReload(Math.random());
    }

    const handleRemove = () => {
        if (confirm('Are you sure you want to remove?')) {
            remove(user.logged, data.id)
                .then(res => {
                    if (res !== 1) {
                        toast.error(`Order ${data.id} can't be removed`, {
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
                        toast.warning(`Order ${data.id} has been successfully removed`, {
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


    const handleView = () => {
        setOrder(data.id)
    }


    // Hook
    useEffect(() => {
        setStatus(data.status);
    }, [data])


    // Render
    return (
        <OrderStyled>
            <form onSubmit={(e) => e.preventDefault()}>
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
                    {
                        admin ? (
                            <OrderStatus status={status} setStatus={setStatus} />
                        ) : (
                            data.status
                        )
                    }
                </div>

                <div>
                    {data.date}
                </div>

                <div className='actions'>
                    <button className='view' onClick={() => handleView()} >View</button>

                    {
                        admin && (
                            <>
                                <button className='save' onClick={() => handleSave()} >Save</button>
                                <button className='remove' onClick={() => handleRemove()} >Remove</button>
                            </>
                        )
                    }
                </div>
            </form>
            <ToastContainer />
        </OrderStyled >
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

        .actions {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 8px;
        }

        button {
            width: 100%;
            padding: 8px;
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