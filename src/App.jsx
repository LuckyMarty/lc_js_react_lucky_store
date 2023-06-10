import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/fonts/fonts.css'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/products/product/Product'
import ContainerWithLeftSideBar from './layout/ContainerWithLeftSideBar'
import Login from './pages/authentification/login/Login'
import Cart from './pages/cart/cart/Cart'
import UserContext from './context/UserContext'
import SiteContext from './context/SiteContext'
import { useState } from 'react'
import Dashboard from './pages/account/dashboard/Dashboard'
import { getLocalStorage } from './utils/localStorage'
import Signup from './pages/authentification/signup/Signup'
import Header from './layout/header/Header'

const localAccessToken = getLocalStorage('access_token');
const localAccessCart = getLocalStorage('inCart');

function App() {
  // User Context
  const [logged, setLogged] = useState(localAccessToken);
  const user = {
    logged,
    setLogged
  }

  // Site Context
  const [cart, setCart] = useState(localAccessCart)
  const [reload, setReload] = useState()
  const site = {
    reload,
    setReload,
    cart,
    setCart
  }


  return (
    <BrowserRouter>
      <SiteContext.Provider value={site}>
        <UserContext.Provider value={user}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            {/* Products */}
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<Product />} />
            {/* Authentification */}
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/account' element={<Dashboard />} />
            {/* Cart */}
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </UserContext.Provider>
      </SiteContext.Provider>
    </BrowserRouter>
  )
}

export default App