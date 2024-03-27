import React from 'react';
import './Products.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function products() {
    
    return (
        <div>
            <div className="container bootdey">
                <div className="row">
                    <div className="col-md-6">
                        <div className="pro-img-details">
                            <img src="https://ohlolly.com/cdn/shop/products/Ohlolly_Beauty-of-Joseon_Apricot_Blossom_Peeling_Gel1_500x.jpg?v=1679602262" alt="" />
                        </div>
                        <div className="pro-img-list">
                            {/* <a href="#/">
                                <img src="https://www.bootdey.com/image/115x100/87CEFA/000000" alt="" />
                            </a>
                            <a href="#/">
                                <img src="https://www.bootdey.com/image/115x100/FF7F50/000000" alt="" />
                            </a>
                            <a href="#/">
                                <img src="https://www.bootdey.com/image/115x100/20B2AA/000000" alt="" />
                            </a>
                            <a href="#/">
                                <img src="https://www.bootdey.com/image/120x100/20B2AA/000000" alt="" />
                            </a> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pro-d-title">
                            <a href="#/" className="">
                                Face Cleanser
                            </a>
                        </h4>
                        
                        <p>
                        What is the description of facial cleanser?
A facial cleanser is a skincare product used to remove make-up, dead skin cells, oil, dirt, and other types of pollutants from the skin, helping to keep pores clear and prevent skin conditions such as acne. Finding the best cleanser can be tough given there are so many options.
                        </p>
                      
                        <div className="m-bot15"> <strong>Price : </strong> <span className="amount-old">200</span>  <span className="pro-price"> 150</span></div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" placeholder="1" className="form-control quantity" />
                        </div>
                        <p>
                            <button className="btn btn-round btn-danger" type="button"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default products;
