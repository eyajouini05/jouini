import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import About from '../pages/About';

import Auth from '../auth/Auth';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Home from '../pages/Home';
import Productlist from "../pages/Productlist";
import Contact from "../pages/Contact";
export default function Router() {
    const [user, setUser] = useState(true)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="Productlist" element={<Productlist />} />
                    


                    <Route path="/auth" element={<Auth />}>
                        <Route index element={<Login />} />
                        <Route path="sign-up" element={<Signup />} />


                    </Route>
                </Route>



            </Routes>
        </BrowserRouter>
    )
}
