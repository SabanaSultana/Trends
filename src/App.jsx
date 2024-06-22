import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Navs from './Navigation Menu/Navs';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home2 from './Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'


function App() {
  

  return (
    <div className='App'>

        <div>
          <Navs/>
          <Home2/>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </Routes>
        </div>

      
    </div>
  )
}

export default App
