import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element ={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;