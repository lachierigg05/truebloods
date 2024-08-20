import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component ={About}/>
        <Route path="/shop" component ={Shop}/>
        <Route path="/listen" component ={Listen}/>
        <Route path="/contact" component ={Listen}/>
      </Switch>
    </Router>
  );
}
