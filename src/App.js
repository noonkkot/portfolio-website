import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Project from './components/Project';
import Contact from './components/Contact';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function Header() {
  return (
    <header id="header">
      <h1><Link to="/">NOONKKOT</Link></h1>
      <nav id="nav">
        <ul>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/project">PROJECT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <p>Copyright 2023. LEE SEOLHWA All rights reserved.</p>
      <ul>
        <li><a href="https://github.com/noonkkot">github</a></li>
        <li><a href="mailto:oyatnunkkot@gmail.com">mail</a></li>
      </ul>
    </footer>
  );
}

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
