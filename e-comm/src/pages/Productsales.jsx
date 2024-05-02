import React, { useEffect } from 'react';
import './Productsales.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, getProducts } from '../store/product';
import { useNavigate } from 'react-router-dom';

function Productsales() {

    const allProducts = useSelector((state) => state.product?.allProduct)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    


    const navigate=useNavigate()
    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

            <div class="container">


                <h3 class="h3">Our products </h3>
                <div class="row">
                    {allProducts?.map((elem) => (
                        <div class="col-md-3 col-sm-6">
                            <div class="product-grid6">
                                <div class="product-image6">
                                    <a href="#/">
                                        <img class="pic-1" src={elem.imageUrl} />
                                    </a>
                                </div>
                                <div class="product-content">
                                    <h3 class="title"><a href="#/">{elem.productName}</a></h3>
                                    <div class="price">${elem.price}
                                        <span>$14.00</span>
                                    </div>
                                </div>
                                <ul class="social">
                                    <li onClick={()=>navigate(`/ProductDetail/${elem.id}`)}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                                    <li onClick={()=>navigate("wishlist")}><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                                    <li onClick={()=>navigate("Check")}><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    ))}




                </div>
            </div>
           
        </div>
    );
}
export default Productsales;