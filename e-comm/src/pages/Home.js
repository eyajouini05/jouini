import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="product-list">
        
      <h2>Our Products</h2>
     
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s1855709-main-zoom.jpg?imwidth=166" alt="Product 1" />
        <h3>La Neige</h3>
        <p>Lip Sleeping Mask Intense Hydration with Vitamin C</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s2742674-main-zoom.jpg?imwidth=160" alt="Product 2" />
        <h3>Dr Jart* </h3>
        <p>Cicapair™ Tiger Grass Color Correcting Treatment SPF 30</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?imwidth=166" alt="Product 3" />
        <h3>serum</h3>
        <p>Concentrated Ginseng Renewing Cream</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s2210482-main-zoom.jpg?imwidth=166" alt="Product 4" />
        <h3>water clear</h3>
        <p>Vital Hydra Solution™ Water Cream Glow Moisturizer with Hyaluronic Acid </p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s2111649-main-zoom.jpg?imwidth=166" alt="Product 5" />
        <h3>Moisturizer</h3>
        <p>Ceramidin™ Skin Barrier Moisturizing Cream</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://www.sephora.com/productimages/sku/s2266708-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166" alt="Product 6" />
        <h3>belief</h3>
        <p>The True Cream Moisturizing Bomb with Peptide and Ceramide</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default Home;
