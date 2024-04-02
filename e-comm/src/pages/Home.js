import React from 'react';
import './Home.css'

import About from "../pages/About";





import Citation from './Blog';
import Featuredproducts from '../components/ProductDetail';
import Slider from "./Slider";

import Testimonials from './Testimonials';

import Blog from "./Blog";
import Trendingproducts from './Trendingproducts';

import Productsales from './Productsales';
import Category from './Category';
import Category2 from './Category2';
import Contact from './Contact';

function Home() {
  return (
    <div>

      <Slider />
      <Trendingproducts />
      <Category />
      <Category2 />

      <Productsales />
      <About />
      <Testimonials />
      <Blog />
      <Contact />

    </div>
  );
}

export default Home;
