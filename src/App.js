import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.js';
import { useState } from 'react';
import Login from './components/Login';
import Product from './components/Products';

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  const auth = localStorage.getItem("userToken");

  return (
    <div>
      <NavBar />
      <Homepage />
      <Footer />
      {token ? <Product /> : <Login token={token} setToken={setToken} />}
    </div>
  );
}

export default App;
