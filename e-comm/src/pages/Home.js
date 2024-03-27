import React from 'react';
import './Home.css'
import Hero from "../assets/hero/Hero";
import About from "../pages/About";
import Trendingproducts from "../pages/TrendingProducts";
import Productlist from '../pages/Product list';

import Quote from "../pages/Quote";
import Reviews from './Review';




function Home() {
  return (
    <div>
      <Hero />
      <Trendingproducts />
      <Productlist />
      <Quote />
      <Reviews />


      <About />


    </div>
  );
}

export default Home;
