import React from 'react';
import { HashRouter as Router,Routes,Route } from "react-router-dom";
import Home from './mainpages/home.js';
import Checkout from './mainpages/checkout';
import Earphones from './mainpages/earphones';
import Earphones1 from './mainpages/earphones-yx1wireless';
import Headphones from './mainpages/headphones';
import Headphones1 from './mainpages/headphones-xx99mark1';
import Headphones2 from './mainpages/headphones-xx99mark2';
import Headphones3 from './mainpages/headphones-xx59';
import Speakers from './mainpages/speakers';
import Speakers1 from './mainpages/speakers-zx7';
import Speakers2 from './mainpages/speakers-zx9';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/headphones" element={<Headphones/>} />
        <Route path="/headphones/xx99mark1" element={<Headphones1 />} />
        <Route path="/headphones/xx99mark2" element={<Headphones2 />} />
        <Route path="/headphones/xx59" element={<Headphones3 />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/speakers/zx7" element={<Speakers1 />} />
        <Route path="/speakers/zx9" element={<Speakers2 />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/earphones/yx1wireless" element={<Earphones1 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
