import React from 'react';
import './TrendingProducts.css'; 

const TrendingProducts = () => {

  const trendingProducts = [
    
    {
      id: 2,
      name: "Cleanser",
      description: "face cleanser",
      image: "https://www.sephora.com/productimages/sku/s1855709-main-zoom.jpg?imwidth=166"
    },
    {
      id: 3,
      name: "eye serum",
      description: "eye cream",
      image: "https://www.sephora.com/productimages/sku/s2742674-main-zoom.jpg?imwidth=160"
    },
    {
      id: 4,
      name: "serum",
      description: "cream",
      image: "https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?imwidth=166"
    },
    {
      id: 4,
      name: "serum",
      description: "cream",
      image: "https://www.sephora.com/productimages/sku/s1855709-main-zoom.jpg?imwidth=166"
    },
    {
      id: 4,
      name: "serum",
      description: "cream",
      image: "https://www.sephora.com/productimages/sku/s2266708-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166"
    },
    
    
   
  ];

  return (
    <div className="trending-products-container">
      <h2>Trending Products</h2>
      <div className="product-list">
        {trendingProducts.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="btn btn-primary">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
