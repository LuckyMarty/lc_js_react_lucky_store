import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// → Home
import Home from './pages/home/Home';
// → Product
import Products from './pages/products/Products';
import Product from './pages/products/product/Product';
// → Auth
import Login from './pages/authentification/login/Login';
import Signup from './pages/authentification/signup/Signup';
// → Dashboard
import UserDashboard from './pages/account/dashboard/UserDashboard';
import AdminDashboard from './pages/account/dashboard/AdminDashboard';
// → Cart
import Cart from './pages/cart/cart/Cart';
// Layout
import Header from './layout/header/Header';
import Footer from './layout/footer/footer';
// Style
import './assets/fonts/fonts.css';
import './App.css';
// Context
import UserContext from './context/UserContext';
import SiteContext from './context/SiteContext';
// API & Functions
import { getLocalStorage } from './utils/localStorage';
// → Routes
import PrivateRoutes from './utils/PrivateRoutes';
import AdminRoutes from './utils/AdminRoutes';
import LoggedRoutes from './utils/LoggedRoutes';
import Confirmation from './pages/cart/Confirmation';


// Local Data
const localAccessToken = getLocalStorage('access_token');
const localAccessCart = getLocalStorage('inCart');
const localIsAdmin = getLocalStorage('isAdmin');


function App() {
  // States
  const [logged, setLogged] = useState(localAccessToken);
  const [isAdmin, setIsAdmin] = useState(localIsAdmin)
  const user = {
    logged,
    setLogged,
    isAdmin,
    setIsAdmin
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


  // Render
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
            <Route element={<LoggedRoutes />}>
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<Signup />} />
            </Route>

            {/* User Logged */}
            <Route element={<PrivateRoutes />}>
              <Route path='/account' element={<UserDashboard />} />
              <Route path='/confirmation' element={<Confirmation />} />
            </Route>

            {/* Admin Panel */}
            <Route element={<AdminRoutes />} >
              <Route path='/admin' element={<AdminDashboard />} />
            </Route>

            {/* Cart */}
            <Route path='/cart' element={<Cart />} />
          </Routes>

          <Footer />

        </UserContext.Provider>
      </SiteContext.Provider>
    </BrowserRouter>
  )
}

export default App