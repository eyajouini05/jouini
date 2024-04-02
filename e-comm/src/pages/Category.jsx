import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./category.css"
import { FaArrowRight } from "react-icons/fa";
const categories = [
  { id: 1, name: 'Oily skin', image: 'https://thekshop.ca/cdn/shop/collections/cosrxgoodmorningcleanser_1024x1024_d8bbde8a-c3d9-4d69-942f-400e13216a13_535x.jpg?v=1636335052' },
  { id: 2, name: 'Sensitive', image: 'https://thekshop.ca/cdn/shop/collections/IMG_0467_535x.jpg?v=1636335561' },
  { id: 3, name: 'Normal', image: 'https://thekshop.ca/cdn/shop/collections/normal_535x.jpg?v=1636335490' },
  { id: 3, name: 'Dry', image: 'https://thekshop.ca/cdn/shop/collections/PURITO-deep-sea-pure-water-cream-texture_1024x1024_4a5d6787-a5ac-4601-8f6d-6bf4a1f9c5fe_535x.png?v=1636335161' },
  { id: 3, name: 'Combination', image: 'https://thekshop.ca/cdn/shop/collections/93d84992545b6c1fb3eb75f19d3d83ba_535x.jpg?v=1641662426' },
  // Ajoutez d'autres catégories si nécessaire
];

const ShopByCategory = () => {
  const handleCategoryClick = (categoryId) => {
    // Logique pour afficher les produits de la catégorie sélectionnée
    console.log('Category clicked:', categoryId);
  };

  return (
    <Container>
      <h1 className="text-center mt-5 ">Shop by skin type</h1>
      <Row className="mt-4 ">
    

        {categories.map((category) => (
          <Col key={category.id} xs={12} md={4} className="mb-4 photoglow">
            <Card style={{ cursor: 'pointer', width: '100%' }} onClick={() => handleCategoryClick(category.id)}>
              <Card.Img variant="top" src={category.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Card.Body className='d-flex justify-content-between align-items-center'>

                <Card.Title>{category.name}</Card.Title>
                <FaArrowRight />

              </Card.Body>
            </Card>
            <div class="glow-wrap">
              <i class="glow"></i>
            </div>
          </Col>
        ))}
      

      </Row>
    </Container>

  );
};


export default ShopByCategory;
