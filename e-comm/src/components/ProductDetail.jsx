import React, { useEffect, useState } from 'react';
 import "./productDetail.css";
import { useParams } from 'react-router-dom';
import { products } from '../dummyData/data';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../store/product';

const ProductDetail = () => {
  const navigate=useNavigate()
  const [product,setProduct] = useState({})
  const {productId} = useParams()

  const onePro = useSelector((state) => state.product?.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(productId))
  }, [])
  console.log(onePro,"g");
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={onePro?.imageUrl} width={'300px'}height={'420px'}/>
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{onePro?.productName} </h1>
          <h2>Your magical product</h2>
          <p>{onePro.description}</p>
        </div>
        <div className="product-price-btn">
          <p className='mt-4'>{onePro?.price}</p>
          <button type="button"onClick={()=>navigate("check")}>Add to card</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
