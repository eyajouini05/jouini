import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutPage() {
 
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <h2>About Us</h2>
                    <p>
                    Chez K-GLOW, nous sommes passionnés par la promotion de la beauté naturelle et la santé de votre peau. Fondée par des experts en soins de la peau, notre entreprise s'engage à fournir des produits de qualité supérieure inspirés par la richesse de la tradition coréenne en matière de soins de la peau.
</p>
<Row className="mt-5">
                <Col>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to provide high-quality skincare products that are effective, natural, and affordable. We believe in promoting healthy skin 
                        through gentle and nourishing formulations that address various skin concerns. 
                    </p>
                    <p>
                        We are dedicated to promoting self-care and confidence through our products, empowering individuals to embrace their natural beauty.
                    </p>

                    Our team of skincare experts is dedicated to researching and developing innovative formulas
                        that address various skin concerns, from hydration and anti-aging to acne and sensitivity.
                        We are committed to promoting healthy skincare habits and empowering individuals to feel confident
                        in their skin.
                </Col>
            </Row>

                    
                </Col>
                <Col md={6}>
                    <img src="https://umma.io/wp-content/uploads/2023/04/1597615_UMMABlog1_1000x1200_033123.jpg" alt="About Us" className="img-fluid" style={{maxwidth:'10' ,maxheight:'10'}} />
                </Col>
            </Row>
            {/* <Row className="mt-5">
                <Col>
                    <h2>Our Co-Founder</h2>
                </Col>
            </Row> */}
            {/* <Row>
                <Col md={4}>
                    <img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/432342052_1117879186080272_7739329859748240227_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kAIiiVX_6WUAX9MY09n&_nc_ht=scontent.ftun16-1.fna&oh=03_AdRR4YJBFgDiECpAZDc2HJ8-xAKchVqx9MdLI6g5M3-OQQ&oe=661CEDA9" alt="Co-Founder 1" className="img-fluid"  />
                    <h3></h3>
                    <p>Co-Founder</p>
                    <p>Jouini Eya </p>
                </Col>
                </Row> */}
            
        </Container>
    );
}

export default AboutPage;
