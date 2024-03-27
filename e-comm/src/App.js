import React from 'react'
import './App.css'; 

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import About from "./pages/About"
import Review from"./pages/Review";
import { Outlet } from "react-router-dom";


import Login from './auth/Login';
import SignUp from'./auth/Signup';
import Products from'./layouts/Products';
import Cart from'./layouts/Cart';
import Home from'./pages/Home';
import Hero from './assets/hero/Hero';
import Productlist from './pages/Product list';
import Quote from"./pages/Quote";

import { Provider } from 'react-redux'
import {store} from "./store"

export default function App() {
  return (
    <Provider store={store}>
   <div>
<Navbar/>
{/* <Hero/> */}

<Outlet />
<Footer/>
{/* <Login/> */}
{/* <SignUp/> */}
{/* <ContactUs/> */}
{/* <About/> */}
{/* <Review/> */}
{/* <Quote/> */}
{/* <Productlist/> */}
{/* <Review/> */}
</div>
</Provider>
  )
}
