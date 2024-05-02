import React from 'react';
import './Home.css'

import Slider from "./Slider";
import Testimonials from './Testimonials';
import Blog from "./Blog";
import Trendingproducts from './Trendingproducts';
// import Productsales from './Productsales';
import Category from './Category';
import Category2 from './Category2';
import Contact from './Contact';
import Pack from './Pack';
import New from "./New"
import Categories from "./Categories"
import NewArrivals from "./NewArrivals"
import Carroussel from './Carroussel';





function Home() {
  return (
    <div>

      <Slider />
      <Trendingproducts />
      <NewArrivals />
      <Categories />
      <Category />
      <Category2 />

      {/* <Productsales /> */}
      <Pack />
<Carroussel/>

      <Testimonials />
      <Blog />
      <Contact />
      {/* <About/> */}
      <New />



      {/* <Check/> */}

    </div>
  );
}

export default Home;
