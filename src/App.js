import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
