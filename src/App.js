import './App.css';
import React from 'react';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


import Home from './Home';
import About from './About';
import Shop from './Shop';

function App() {
  return (
  <div>

      <div className='container'>
        <h5>Free Shipping Worldwide from our Santas </h5>
      </div>


    <Router>
      <nav className='container-menu'>
        <Link to="/" className="link">home</Link>
        <Link to="/About" className="link">about</Link>
        <Link to="/Shop" className="link">shop</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="/Shop"  element={<Shop/>}/>
      </Routes>
    </Router>

  </div>
    
  
  
  );
}

export default App;
