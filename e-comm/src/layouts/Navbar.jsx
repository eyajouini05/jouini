import React, { useState } from 'react'
import './Navbar.css'
import { RiShoppingCart2Line } from "react-icons/ri";
// import logo from "../assets/K-GLOW.png"
import logo from "..//assets/K-GLOW (2).png"
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [Menu, setMenu] = useState("shop")
  const navigate = useNavigate()

  return (

    <div className='navbar'>
      <div className='nav-logo'>

        <img src={logo} alt='logo' style={{ width: 90 }} />
        <p>KGlow</p>
      </div>


      <ul className='nav-menu'>
        <li onClick={() => navigate("Product")}>shop</li>
        <li onClick={() => navigate("About")}>About</li>
        <li onClick={() => navigate("Cart")}>Cart</li>
        <li onClick={() => navigate("Contact")}>Contact</li>




      </ul>

      <div className='nav-login-cart '>

        <button type="button" class="btn  position-relative align-items-center " style={{ background: "blue" }}>

          <RiShoppingCart2Line />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0

          </span>
        </button>
        <button  onClick={() => navigate("login")} className='btn mx-4' style={{ background: "blue" }}>login  </button>

      </div>
    </div>



  )
}

export default Navbar


