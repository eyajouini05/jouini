import React from 'react';
import './Pack.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { packs } from '../dummyData/data';



function Pack() {
    const navigate=useNavigate()
  
	return (
		<div>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

<div class="container">
  

    <h3 class="h3">Our packs  </h3>
    <div class="row">
        {packs?.map((e,i)=>
        <div class="col-md-3 col-sm-6">
            <div class="product-grid6">
                <div class="product-image6">
                    <a href="#/">
                        <img class="pic-1" src={e.image}/>
                    </a>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#/">{e.title}</a></h3>
                    <div class="price">{e.price}
                       
                    </div>
                </div>
                <ul class="social">
                    <li onClick={()=>navigate(`PackDetail/${e.id}`)}><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                    <li onClick={()=>navigate("wishlist")}><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li onClick={()=>navigate("Check")}><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
        </div>
    )}
       
        
        
        
    </div>
</div>

		</div>
	);
}
export default Pack;