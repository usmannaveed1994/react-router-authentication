import React from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Navigation from './navigation';

function App() {
  return (
    <div className="Container">
        <Router>
          <div className="navbar">
            <b>Menu</b>
            <Navigation />
          </div>
          <div className="main"> 
            <Routes />
          </div>   
        </Router>
    </div>
      
  );
}

export default App;
