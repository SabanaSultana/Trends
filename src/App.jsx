import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navs from './Navigation Menu/Navs';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header from './Pages/Header';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Navs />
      </div>
      <div>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
