import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import About from '../pages/About';

import Auth from '../auth/Auth';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Home from '../pages/Home';
import Check from '../pages/Check';
import ProductDetail from '../components/ProductDetail';
import Contact from "../pages/Contact";
import Productsales from '../pages/Productsales';

import Wishlist from "../pages/Wishlist"
import Read1 from"../pages/Read1"
import Read2 from"../pages/Read2"
import Read3 from"../pages/Read3"

import CategoryDetail from '../pages/categoryDetail';
export default function Router() {
    const [user, setUser] = useState(true)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Read1" element={<Read1 />} />
                    <Route path="Read2" element={<Read2 />} />
                    <Route path="Read3" element={<Read3 />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Products" element={<Productsales />} />
                    <Route path="Check" element={<Check />} />
                    <Route path="Check" element={<Check />} />
                    <Route path="Wishlist" element={<Wishlist />} />
                   <Route path='category-detail/:id' element= {<CategoryDetail/>}/>
                  
                  
                    <Route path="Home" element={<Home />} />
                    <Route path="productDetail/:productId" element={< ProductDetail/>} />
                   

                    <Route path="/auth" element={<Auth />}>
                        <Route index element={<Login />} />
                        <Route path="sign-up" element={<Signup />} />
                    </Route>
                </Route>



            </Routes>
        </BrowserRouter>
    )
}
