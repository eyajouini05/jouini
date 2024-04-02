import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const brands = [
  { id: 1, name: 'Acne', image: 'https://thekshop.ca/cdn/shop/collections/12_1024x1024_e5f7e072-eebd-4bbc-a29c-d55a6579b71e_535x.png?v=1636335737' },
  { id: 2, name: 'Anti-Aging', image: 'https://thekshop.ca/cdn/shop/collections/imfrom-ginseng-mask_535x.jpg?v=1659464729' },
  { id: 3, name: 'Dryness', image: 'https://thekshop.ca/cdn/shop/collections/dryness_535x.jpg?v=1636336299' },
  { id: 3, name: 'Pigmentation', image: 'https://thekshop.ca/cdn/shop/products/isntreecniacintoningampoule_535x.jpg?v=1658109058' },
  { id: 3, name: 'Oil control', image: 'https://thekshop.ca/cdn/shop/collections/im-from-vitamin-tree-water-gel-hover_1024x1024_progressive_png_535x.jpg?v=1636336899' },
  { id: 3, name: 'sensitivity', image: 'https://thekshop.ca/cdn/shop/collections/klairs_blue_535x.jpg?v=1659464234' },
  // Ajoutez d'autres marques si nécessaire
];

const ShopByCategory = () => {
  const handleBrandClick = (brandId) => {
    // Logique pour afficher les produits de la marque sélectionnée
    console.log('Brand clicked:', brandId);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Shop by skin concern</h1>
      <Row className="mt-4">
        {brands.map((brand) => (
          <Col key={brand.id} xs={12} md={4} className="mb-4">
            <Card style={{ cursor: 'pointer', width: '100%' }} onClick={() => handleBrandClick(brand.id)}>
              <Card.Img variant="top" src={brand.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{brand.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ShopByCategory;
