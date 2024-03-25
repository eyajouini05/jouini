import React, { useState } from 'react'
import './Navbar.css'
import { RiShoppingCart2Line } from "react-icons/ri";
// import logo from "../assets/K-GLOW.png"
import logo from"..//assets/K-GLOW (2).png"

function Navbar() {

const [Menu,setMenu]=useState("shop")

  return (
   
        <div className='navbar'>
          <div className='nav-logo'>

          <img src={logo} alt='logo' style={{width:90}}/>
             <p>K-GLOW</p>
          </div>
       

        <ul className='nav-menu'>
            <li>shop</li>
            <li>about</li>
            <li>cart</li>
            <li>contact</li>



        </ul>
      
<div className='nav-login-cart '>
<button type="button" class="btn btn-primary position-relative align-items-center ">
<RiShoppingCart2Line />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0

  </span>
</button>
    <button className='btn btn-success mx-4'>login</button>
 
    </div>
</div>
         
      
   
  )
}

export default Navbar
