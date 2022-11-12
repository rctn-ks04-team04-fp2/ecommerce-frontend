import React from 'react';
import { NavBar } from './components/NavBar.js'
import './styles/globals.css';
import './styles/colors.css';
import Homepage from './pages/Homepage';
import Footer from './components/Footer.js';
import { useState } from 'react';
import LoginPage from './pages/LoginPage.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
