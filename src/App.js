import logo from './logo.svg';
import './App.css';
import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage.js';
import AboutMe from './pages/Aboutme/AboutMe';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project/Project';
import Header from './Header/header';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/LandingPage/LandingPage';
import About from './pages/Aboutme/AboutMe';
import Portfolio from './pages/Project/Project';
import Footer from './Footer/footer';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>



  );
}

export default App;
