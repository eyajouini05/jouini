
import React from 'react';
import { RiUserFill } from "react-icons/ri";
 import { RiShoppingCart2Fill } from "react-icons/ri";
 import { RiHeartFill } from "react-icons/ri";


import "./Navbar.css"
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";

const NavBar = () => {
  const Navigate=useNavigate()
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="white" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home" style={{ color: 'pink',fontWeight:'bold',fontSize:"25px" }}>K-Glow</ReactBootStrap.Navbar.Brand>

        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.NavDropdown title="Shop" id="collasible-nav-dropdown" className='blackColor'>
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Category</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Routine</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Concern</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Skin Types</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">By price</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Other</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <Link to="/Products">
              <ReactBootStrap.Nav.Link href="#Products" style={{ color: 'black' }}  onClick={()=>Navigate("Productsales")}  >Products </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Products">
              <ReactBootStrap.Nav.Link href="#Brands" style={{ color: 'black' }}  onClick={()=>Navigate("")}  >Brands </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Home">
              <ReactBootStrap.Nav.Link href="#Home" style={{ color: 'black' }} onClick={()=>Navigate("Home")}>Home</ReactBootStrap.Nav.Link>
            </Link>
           


          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/Aout ">
              <ReactBootStrap.Nav.Link  style={{ color: 'black' }}  onClick={()=>Navigate("About")} >About </ReactBootStrap.Nav.Link>
            </Link>
            <Link to="/Contact">
              <ReactBootStrap.Nav.Link eventKey={2} style={{ color: 'black' }}  onClick={()=>Navigate("contact")}>
                Contact
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        

        <div className='tn-icons mb-3'>
        <a className='login' href=""><RiUserFill onClick={()=>Navigate("/Auth")} /></a>
        <a className='fav-icon' href=""><RiHeartFill    onClick={()=>Navigate("Wishlist")}/></a>
        <a className='cart-icon' href=""><RiShoppingCart2Fill   onClick={()=>Navigate("Check")}/></a>

      </div>
      </ReactBootStrap.Navbar>
     

    </div>

    // </div >
    
  )
}

export default NavBar;