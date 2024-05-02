import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./categories.css"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getcategories } from '../store/category';
const categories = [
  { id: 1, name: 'Face', image: 'https://specials-images.forbesimg.com/imageserve/660c634910576334d58c9d42/Best-Korean-Skincare-Products/960x0.jpg?fit=scale',path:"/face" },
  { id: 2, name: 'Eyes', image: 'https://media.allure.com/photos/64cd162a311e18980b8c09ce/4:3/w_2664,h_1998,c_limit/best_korean_eye_cream_003%20(1).jpg', path:"/eyes"},
  { id: 3, name: 'Lips', image: 'https://www.gosupps.com/media/catalog/product/7/1/71ZCdeGx_hL.jpg',path:"/lips" },
  
];

const ShopByCategory = () => {
  const handleCategoryClick = (categoryId) => {
    // Logique pour afficher les produits de la catégorie sélectionnée
    console.log('Category clicked:', categoryId);
  };
const navigate=useNavigate()
const categories = useSelector((state) => state.category?.categories)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getcategories())
  
}, [])
  return (
    <Container>
      
    
<h1 className="shop-by-title text-center mt-5">Shop by category</h1>
      <Row className="mt-4 ">
    

      {categories.map((category) => (
  <Col onClick={()=>navigate(`/category-detail/${category.id}`)} key={category.id} xs={12} md={4} className="mb-4 photoglow">
    <Card style={{ cursor: 'pointer', width: '100%', position: 'relative' }} onClick={() => handleCategoryClick(category.id)} className='shadow-sm'>
      <Card.Img variant="top" src={category?.imageUrl} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className='img'/>
      <div className="category-title">
        <Card.Title>{category.name}</Card.Title>
        <FaArrowRight />
      </div>
    </Card>
    <div className="glow-wrap">
      <i className="glow"></i>
    </div>
  </Col>
))}

      

      </Row>
    </Container>

  );
};


export default ShopByCategory;