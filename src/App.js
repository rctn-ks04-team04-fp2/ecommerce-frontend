import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.js';
import LoginPage from './pages/LoginPage.js';
import CartPage from './pages/CartPage.js';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div>
      <Router>
        <NavBar auth={auth} setAuth={setAuth} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage auth={auth} setAuth={setAuth} />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
