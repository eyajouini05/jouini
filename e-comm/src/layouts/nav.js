import './nav.css'
import React from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sdb5szJ_6SQg6ZqYll1fPcXopfUfII10ZA&usqp=CAU" alt="Korean Skincare Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#products" className="nav-link">Products</a></li>
          <li><a href="#blog" className="nav-link">Blog</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <div className='nav-login-cart '>
          <button type="button" class="btn btn-primary position-relative align-items-center ">
            <FiShoppingCart />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0

            </span>
          </button>
          <button className='btn btn-success mx-4'>login</button>

        </div>
      </div>

    </nav>
  );
}

export default Nav;
