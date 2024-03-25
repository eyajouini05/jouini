import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact us';
import Auth from '../auth/Auth';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Home from '../pages/Home';
export default function Router() {
    const [user, setUser] = useState()
    return (
        <BrowserRouter>
            <Routes>
                {
                    user ? <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />

                    </Route> : (
                        <Route path="/" element={<Auth />}>
                            <Route index element={<Login />} />
                            <Route path="sign-up" element={<Signup />} />


                        </Route>
                    )
                }

            </Routes>
        </BrowserRouter>
    )
}
