import React from 'react';
import './Home.css'
import Hero from "../assets/hero/Hero";
import About from "../pages/About";
import Trendingproducts from "../pages/TrendingProducts";
import Productlist from './Productlist';

import Quote from "../pages/Quote";
import Review from './Review';
import Citation from './citation';
import Sidebar from '../layouts/Sidebar';






function Home() {
  return (
    <div>
      <Hero />
      {/* <Sidebar/> */}
      <Trendingproducts />
      <Productlist/>
    
      <Citation/>
      <About />
      <Review/>




    </div>
  );
}

export default Home;
