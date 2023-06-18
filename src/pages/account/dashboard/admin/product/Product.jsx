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


export default function Product({ data }) {
    // States
    // → Context
    const user = useContext(UserContext);
    const site = useContext(SiteContext);
    // → Data
    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [quantity, setQuantity] = useState(data.quantity);
    const [price, setPrice] = useState(data.price);
    const [image, setImage] = useState(data.image)


    // Handler
    const handleSave = () => {
        const newData = {
            id: data.id,
            name,
            description,
            image,
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
        if (confirm("Are you sure you want to remove?")) {
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
                        toast.success(`Product ${data.id} has been successfully removed`, {
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
            toast.info(`Action has been canceled`, {
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


    // Render
    return (
        <ProductStyled>
            <form onSubmit={(e) => event.preventDefault()}>
                <div>{data.id}</div>
                <div>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div>
                    <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
                <div>
                    <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} min={0} step={1} />
                </div>
                <div>
                    <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} min={0} step={0.01} />
                </div>

                <div>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div>
                    <button className='save' onClick={() => handleSave()} >Save</button>
                    <button className='remove' onClick={() => handleRemove()} >Remove</button>
                </div>
            </form>
            <ToastContainer />
        </ProductStyled>
    )
}


const ProductStyled = styled.div`
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