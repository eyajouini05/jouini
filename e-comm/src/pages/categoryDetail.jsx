import React, { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../store/product';
import { useDispatch, useSelector } from 'react-redux';
import { getcategory } from '../store/category';



function CategoryDetail() {
  const products = useSelector((state) => state.product?.products)
  const category = useSelector((state) => state.category?.category)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {

 
      dispatch(getcategory(id))

      
      
      dispatch(getProducts(category.name))
  }, [dispatch])
  console.log(category,"na");
  console.log(products,"naaa");
  console.log(category.name,"name");


  return (
   
    <div>
       <div>
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

              <div class="container">


                  <h3 class="h3">Our products </h3>
                  <div class="row">
                      {products.map((elem) => (
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
              <hr />


              <hr />
          </div>
    </div>
  );
}
export default CategoryDetail;