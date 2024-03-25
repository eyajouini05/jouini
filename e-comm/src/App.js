import React from 'react'
import './App.css'; 

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import About from "./pages/About"
import Review from"./pages/Review";


import ContactUs from'./pages/Contact Us';
import Login from './auth/Login';
import SignUp from'./auth/Signup';
import Product from'./layouts/Product';
import Cart from'./layouts/Cart';
import Home from'./pages/Home';
import Hero from './assets/hero/Hero';

export default function App() {
  return (
   <div>
{/* <Navbar/> */}
{/* <Login/> */}
{/* <Footer/> */}

{/* <SignUp/> */}
{/* <ContactUs/> */}
{/* <About/> */}
{/* <Hero/> */}
{/* <Review/> */}
{/* <Home/> */}

<Cart/>
{/* <Product/> */}

</div>

  )
}
