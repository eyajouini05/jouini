import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={1000}>
        <img src='https://images.squarespace-cdn.com/content/v1/6296f3e6c0f69e7dd46d9076/bb1907aa-8f2c-431f-a00d-77cb27884f87/brandsbg+-+2023-12-21T191500.655.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://miro.medium.com/v2/resize:fit:1200/1*xYU31DYodSlIYADG9A-c0w.jpeg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://blog.beautybarn.in/wp-content/uploads/2022/02/10-Best-Korean-Skincare-Brightening-Products-Cover-Image.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
  );
}