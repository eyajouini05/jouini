import React from 'react'
import './App.css';

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

import About from "./pages/About"
import Review from "./pages/Review";
import { BrowserRouter, Outlet } from "react-router-dom";


import Login from './auth/Login';
import SignUp from './auth/Signup';
import Products from './layouts/Products';
import Cart from './layouts/Cart';
import Home from './pages/Home';
import Hero from './assets/hero/Hero';
import Productlist from './pages/Productlist';
import Quote from "./pages/Quote";


import { Provider } from 'react-redux'
import { store } from "./store"
import TrendingProducts from './pages/TrendingProducts';
import Contact from "./pages/Contact";
import CusNavbar from './layouts/Navbar';



export default function App() {
  return (



    <Provider store={store}>
      <div>
        <CusNavbar />
        {/* <Hero/> */}

        <Outlet />
        <Footer />
        {/* <Login/> */}
        {/* <SignUp/> */}

        {/* <About/> */}
        {/* <Review/> */}
        {/* <Quote/> */}
        {/* <Productlist/> */}
        {/* <TrendingProducts/> */}
        {/* <Contact/> */}


      </div>
    </Provider>


  )
}
