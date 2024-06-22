import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navs.css';

function Navs() {
  return (
    <div className="navbar">
      <div className="logo">
        Trendy Threads
      </div>
      <div className="navs">
        <ul>
          <li>
            <Link to="/"><span >Home</span></Link>
          </li>
          <li>
            <Link to="/about"><span class="col-nav">About</span></Link>
          </li>
          <li>
            <Link to="/contact"><span >Contact Us</span></Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <div>
          <Link to="/login">
                <button className='login-signup'>SignUp/Login</button>
          </Link>
        </div>
        <div>
          <Link to="/">
            <FaShoppingCart className="cart-icon" />
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Navs;
