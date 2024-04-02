import React from 'react'
import './App.css';

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Testimonial from './pages/Testimonials';

import About from "./pages/About"

import { BrowserRouter, Outlet } from "react-router-dom";


import Login from './auth/Login';
import SignUp from './auth/Signup';

import Cart from './layouts/Cart';
import Home from './pages/Home';


import Quote from "./pages/Productsales";


import { Provider } from 'react-redux'
import { store } from "./store"

import Contact from "./pages/Contact";
import CusNavbar from './layouts/Navbar';
import Featuredproducts from './components/ProductDetail';
import Slider from "./pages/Slider";
// import Productsales from './pages/Productsales';
import Trendingproducts from"./pages/Trendingproducts";
import Blog from"./pages/Blog";
import Addtocard from"./components/ProductDetail";
import Testimonials from './pages/Testimonials';

import Category from"./pages/Category";

export default function App() {
  return (



    <Provider store={store}>
      <div>
        {/* <Cart/> */}
        {/* <Addtocard/> */}
  <CusNavbar />
{/* <Testimonials/> */}
{/* <Category/> */}
        <Outlet />
        <Footer />
  {/* <Slider/> */}
{/* <Blog/> */}
{/* <Featuredproducts/> */}
{/* <Trendingproducts/> */}
{/* <About/> */}
{/* <Addtocard/> */}
      </div>
    </Provider>


  )
}
