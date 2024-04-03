import React from 'react';
import './Trendingproducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Trendingproducts() {
const navigate=useNavigate()
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div class="container">


                <h3 class="h3">Trending now </h3>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid6">
                            <div class="product-image6">
                                <a href="#/">
                                    <img class="pic-1" src="https://ohlolly.com/cdn/shop/products/Ohlolly_Manyo-Pure-Cleansing-Oil-1_700x.jpg?v=1625090623" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#/">Clarifying Oil Cleanser</a></h3>
                                <div class="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul class="social">
                            <li onClick={()=>navigate("productDetail")}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid6">
                            <div class="product-image6">
                                <a href="#/">
                                    <img class="pic-1" src="https://ohlolly.com/cdn/shop/products/Ohlolly-Cosrx-AHA-Whitening-Power-Liquid_700x.jpg?v=1568737121" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#/">AHA 7 Whitehead Power Liquid</a></h3>
                                <div class="price">$8.00
                                    <span>$12.00</span>
                                </div>
                            </div>
                            <ul class="social">
                            <li onClick={()=>navigate("productDetail")}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid6">
                            <div class="product-image6">
                                <a href="#/">
                                    <img class="pic-1" src="https://ohlolly.com/cdn/shop/products/Ohlolly_Hyeja_MatchaMudMask_2_700x.jpg?v=1671855265" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#/">Vegan Matcha Gentle Mud Cream Mask</a></h3>
                                <div class="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul class="social">
                            <li onClick={()=>navigate("productDetail")}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid6">
                            <div class="product-image6">
                                <a href="#/">
                                    <img class="pic-1" src="https://ohlolly.com/cdn/shop/products/Ohlolly_PKY_MoistureSerum_700x.jpg?v=1670474228" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><a href="#/">Moisture Serum</a></h3>
                                <div class="price">$11.00
                                    <span>$14.00</span>
                                </div>
                            </div>
                            <ul class="social">
                                <li onClick={()=>navigate("productDetail")}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />


            <hr />
        </div>
    );
}
export default Trendingproducts;