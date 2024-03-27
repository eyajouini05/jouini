import React, { useEffect } from 'react';
import './Product list.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from  'react-redux'
import { getProducts } from '../store/product';
function Productlist() {

  const products = useSelector((state)=>state.product.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  },[])

console.log(products);



  return (
    <div>
      <h2>Our Products</h2>
    <div className="product-list">
        
     
      {products.map((elem)=>(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>{elem.productName}</Card.Title>
        <Card.Text>
          {elem.description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
      ))}
 

    {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>Serum</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>Eye</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>Lips balm</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>Face</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>face cleanser</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>eye patch</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://koreanskincare.nl/cdn/shop/files/220211_mixsoon_01_99abeb0f-a3f4-4051-b8b8-de8e1ac0add5_720x.jpg?v=1709807279" />
      <Card.Body>
        <Card.Title>cleanser b</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card> */}
   
    </div>
    
 


    </div>
  );
}

export default Productlist;
