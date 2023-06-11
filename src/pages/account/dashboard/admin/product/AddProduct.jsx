import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
// Style
import { styled } from 'styled-components';
// Layout
import FormLayout from '../../../../../layout/page/authentification/FormLayout';
// Context
import UserContext from '../../../../../context/UserContext';
// API & Functions
import { add } from '../../../../../api/product';



export default function AddProduct() {
  // States
  // → Context
  const user = useContext(UserContext);
  // → Data
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('')


  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      name,
      description,
      image: "",
      quantity,
      price
    }

    add(user.logged, newData)
      .then(res => {
        console.log(res);
        if (res.error) {
          toast.error(res.error, {
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
          toast.success(`Product has been successfully added`, {
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
  }


  // Render
  return (
    <AddProductStyled>
      <FormLayout>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' value={name} onChange={e => setName(e.target.value)} required />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea name='description' id='description' value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          {/* <div>
            <label htmlFor="image">Image</label>
            <input type="text" name='image' id='image' value={image} onChange={e => setImage(e.target.value)} />
          </div> */}

          <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name='quantity' id='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} min={0} step={1} />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <input type="number" name='price' id='price' value={price} onChange={e => setPrice(e.target.value)} min={0} step={.01} />
          </div>

          <input type="submit" value="Add" />
        </form>
      </FormLayout>
      <ToastContainer />
    </AddProductStyled>
  )
}


const AddProductStyled = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    input[type="submit"] {
        float: inherit;
    }
  }
`;