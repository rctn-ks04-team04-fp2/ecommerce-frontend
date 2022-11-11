import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Products from './components/Products.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <NavBar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
