import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.js';
import LoginPage from './pages/LoginPage.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './components/Cart.js';
import ProductList from './dummy product/ProductList.js';
import CartList from './dummy product/CartList.js';

function App() {
  const [auth, setAuth] = useState(true);

  const [product, setProduct] = useState([
    {
      url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      name: "Fjallraven - Foldsack No. 1 Backpack",
      category: "men's clothing",
      price: 109.95
    },
    {
      url: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      category: "men's clothing",
      price: 22.3
    },
    {
      url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      name: "Mens Casual Slim Fit",
      category: "men's clothing",
      price: 15.99
    },
    {
      url: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      name: "DANVOUY Womens T Shirt ",
      category: "women's clothing",
      price: 12.99
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, {...data, quantity: 1 }])
  }

  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} setShowCart={setShowCart}/>

        {
          showCart ?
          <ProductList product={product} addToCart={addToCart} />:
          <CartList cart={cart}/>
        }
        <ProductList product={product} addToCart={addToCart} />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />}  />
          <Route path="/login" element={<LoginPage auth={auth} setAuth={setAuth} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
