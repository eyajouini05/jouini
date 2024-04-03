
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./category.css"
import { FaArrowRight } from "react-icons/fa";
const categories = [
  { id: 1, name: 'Acne', image: 'https://thekshop.ca/cdn/shop/collections/12_1024x1024_e5f7e072-eebd-4bbc-a29c-d55a6579b71e_535x.png?v=1636335737' },
  { id: 2, name: 'Anti-Aging', image: 'https://thekshop.ca/cdn/shop/collections/imfrom-ginseng-mask_535x.jpg?v=1659464729' },
  { id: 3, name: 'Dryness', image: 'https://thekshop.ca/cdn/shop/collections/dryness_535x.jpg?v=1636336299' },
  { id: 3, name: 'Pigmentation', image: 'https://thekshop.ca/cdn/shop/products/isntreecniacintoningampoule_535x.jpg?v=1658109058' },
  { id: 3, name: 'Oil control', image: 'https://thekshop.ca/cdn/shop/collections/im-from-vitamin-tree-water-gel-hover_1024x1024_progressive_png_535x.jpg?v=1636336899' },
  { id: 3, name: 'sensitivity', image: 'https://thekshop.ca/cdn/shop/collections/klairs_blue_535x.jpg?v=1659464234' },
  
  // Ajoutez d'autres catégories si nécessaire
];

const ShopByCategory = () => {
  const handleCategoryClick = (categoryId) => {
    // Logique pour afficher les produits de la catégorie sélectionnée
    console.log('Category clicked:', categoryId);
  };

  return (
    <Container>
      <h1 className="text-center mt-5 ">Shop by skin concern</h1>
      <Row className="mt-4 ">
    

      {categories.map((category) => (
  <Col key={category.id} xs={12} md={4} className="mb-4 photoglow">
    <Card style={{ cursor: 'pointer', width: '100%', position: 'relative' }} onClick={() => handleCategoryClick(category.id)} className='shadow-sm'>
      <Card.Img variant="top" src={category.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className='img'/>
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