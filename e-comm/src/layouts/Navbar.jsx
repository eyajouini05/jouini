// import React, { useState } from 'react'
// import './Navbar.css'
// import { RiShoppingCart2Line } from "react-icons/ri";
// // import logo from "../assets/K-GLOW.png"
// import logo from "..//assets/K-GLOW (2).png"
// import { useNavigate } from 'react-router-dom';

// function Navbar() {

//   const [Menu, setMenu] = useState("shop")
//   const navigate = useNavigate()

//   return (

//     <div className='navbar'>
//       <div className='nav-logo'>

//         <img src={logo} alt='logo' style={{ width: 90 }} />
//         <p>KGlow</p>
//       </div>


//       <ul className='nav-menu'>
//         <li onClick={() => navigate("Product")}>shop</li>
//         <li onClick={() => navigate("About")}>About</li>
//         <li onClick={() => navigate("Cart")}>Cart</li>
//         <li onClick={() => navigate("Contact")}>Contact</li>




//       </ul>

//       <div className='nav-login-cart '>

//         <button type="button" class="btn  position-relative align-items-center " style={{ background: "blue" }}>

//           <RiShoppingCart2Line />
//           <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//             0

//           </span>
//         </button>
//         <button  onClick={() => navigate("login")} className='btn mx-4' style={{ background: "blue" }}>login  </button>

//       </div>
//     </div>



//   )
// }

// export default Navbar



// import React from 'react';
// import './Navbar.css'; // Importer le fichier CSS pour la navbar

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">Logo</div>
//       <ul className="navbar-links">
//         <li className="navbar-link">Accueil</li>
//         <li className="navbar-link">Produits</li>
//         <li className="navbar-link">À propos</li>
//         <li className="navbar-link">Contact</li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function CusNavbar() {

  const navigate = useNavigate()

  return (
    <Navbar expand="lg" className="" style={{background:"#efd9d130"}}>
    <Container fluid>
      <Navbar.Brand href="#">
        <img src='https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-skin-care-logo-png-image_5774040.png' alt='logo' style={{width:50,height:50}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
           <Nav.Link  onClick={()=>navigate("Productlist")}>Home</Nav.Link>
          <Nav.Link  onClick={()=>navigate("about")}>About</Nav.Link>
          <Nav.Link  onClick={()=>navigate("contact")}>contact</Nav.Link>
          
          
        </Nav>
        <Form className="d-flex justify-content-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <CiShoppingCart size={"40"} color='#fa2f6d'/>
        <CgProfile size={"30"}  onClick={()=>navigate("auth")} />

      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default CusNavbar;
