import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component ={About}/>
        <Route path="/shop" component ={Shop}/>
        <Route path="/listen" component ={Listen}/>
        <Route path="/contact" component ={Contact}/> */}
      </Routes>
    </Router>
  );
}

export default App;