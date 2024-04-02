// // import React from "react";
// // import {
// //   MDBCard,
// //   MDBCardBody,
// //   MDBCol,
// //   MDBContainer,
// //   MDBIcon,
// //   MDBRow,
// // } from "mdb-react-ui-kit";
// // import "./Testimonials.css";

// // export default function Testimonials() {
// //   return (
// //     <MDBContainer className="py-5">
// //       <MDBRow className="d-flex justify-content-center">
// //         <MDBCol md="10" xl="8" className="text-center">
// //           <h3 className="mb-4">Testimonials</h3>
// //           <p className="mb-4 pb-2 mb-md-5 pb-md-0">
// //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
// //             error amet numquam iure provident voluptate esse quasi, veritatis
// //             totam voluptas nostrum quisquam eum porro a pariatur veniam.
// //           </p>
// //         </MDBCol>
// //       </MDBRow>
// //       <MDBRow className="text-center d-flex align-items-stretch">
// //         <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
// //           <MDBCard className="testimonial-card">
// //             <div
// //               className="card-up"
// //               style={{ backgroundColor: "#9d789b" }}
// //             ></div>
// //             <div className="avatar mx-auto bg-white">
// //               <img
// //                 src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-F56VpAYciIAX-kwW7P&_nc_ht=scontent.ftun16-1.fna&oh=00_AfANH9_sHfpe-ga2pSy-jpjP_reeXzknB3AKtEnaiLPOaw&oe=660E79B0"width={'150px'}height={'150px'}
// //                 className="rounded-circle img-fluid"
// //               />
// //             </div>
// //             <MDBCardBody>
// //               <h4 className="mb-4">Khabouchi Rawaa</h4>
// //               <hr />
// //               <p className="dark-grey-text mt-4">
// //                 <MDBIcon fas icon="quote-left" className="pe-2" />
// //                 I can't say enough good things about the K-Glow Radiance Serum. It's become an essential part of my skincare routine, and I can't imagine ever being without it. I highly recommend it to anyone looking to achieve radiant, glowing skin.
                
                

                
// //               </p>
// //             </MDBCardBody>
// //           </MDBCard>
// //         </MDBCol>
// //         <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
// //           <MDBCard className="testimonial-card">
// //             <div
// //               className="card-up"
// //               style={{ backgroundColor: "#7a81a8" }}
// //             ></div>
// //             <div className="avatar mx-auto bg-white">
// //               <img
// //                 src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/331077014_1199203944295261_8523133215185294315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TJu9hTehOfsAX98wJmb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBN6WpDyu0HsbTlUuMvsElrwPF9UfvazLg4C0YjKkBQJA&oe=660E6ED3"
// //                 className="rounded-circle img-fluid"
// //               />
// //             </div>
// //             <MDBCardBody>
// //               <h4 className="mb-4">Chebbi Eya </h4>
// //               <hr />
// //               <p className="dark-grey-text mt-4">
// //                 <MDBIcon fas icon="quote-left" className="pe-2" />
// //                 I've been using the K-Glow Radiance Serum for a few weeks now, and I'm absolutely thrilled with the results. This serum has truly transformed my skincare routine and given me the radiant, glowing complexion I've always dreamed of.
               
// //               </p>
// //             </MDBCardBody>
// //           </MDBCard>
// //         </MDBCol>
// //         <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
// //           <MDBCard className="testimonial-card">
// //             <div
// //               className="card-up"
// //               style={{ backgroundColor: "#6d5b98" }}
// //             ></div>
// //             <div className="avatar mx-auto bg-white">
// //               <img
// //                 src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/415092627_7227880883942056_5498305136282029963_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kdz6AZeJ-n0AX_MZRBI&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8Sy4kJdT6gsuT2yG9X3J1-hyxz9DsTFwvKh4NhKjmmw&oe=660E4829"width={'150px'}height={'150px'}
// //                 className="rounded-circle img-fluid"
// //               />
// //             </div>
// //             <MDBCardBody>
// //               <h4 className="mb-4">Jouini Hiba</h4>
// //               <hr />
// //               <p className="dark-grey-text mt-4">
// //                 <MDBIcon fas icon="quote-left" className="pe-2" />
// //                 : While this serum is priced at a premium, I believe it's worth every penny. A little goes a long way, so the bottle lasts a long time, making it a great investment in my skincare routine.
// //               </p>
// //             </MDBCardBody>
// //           </MDBCard>
// //         </MDBCol>
// //       </MDBRow>
// //     </MDBContainer>
// //   );
// // }
// // Testimonials.js

// import React from 'react';
// import "./Testimonials.css"; 
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Testimonials = () => {
//   return (
//     <section className="home-testimonial">
//       <div className="container-fluid">
//         <div className="row d-flex justify-content-center testimonial-pos">
//           <div className="col-md-12 pt-4 d-flex justify-content-center">
//             <h3>Testimonials</h3>
//           </div>
          
//         </div>
//         <section className="home-testimonial-bottom">
//           <div className="container testimonial-inner">
//             <div className="row d-flex justify-content-center">
//               <TestimonialItem
//                 text="At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development."
//                 image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/415092627_7227880883942056_5498305136282029963_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kdz6AZeJ-n0AX_MZRBI&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8Sy4kJdT6gsuT2yG9X3J1-hyxz9DsTFwvKh4NhKjmmw&oe=660E4829"
//                 name="Jouini Hiba"
            
//               />
//               <TestimonialItem
//                 text="At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development."
//                 image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/331077014_1199203944295261_8523133215185294315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TJu9hTehOfsAX98wJmb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBN6WpDyu0HsbTlUuMvsElrwPF9UfvazLg4C0YjKkBQJA&oe=660E6ED3"
//                 name="Chebbi Eya"
            
//               />
//               <TestimonialItem
//                 text="At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development."
//                 image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-F56VpAYciIAX-kwW7P&_nc_ht=scontent.ftun16-1.fna&oh=00_AfANH9_sHfpe-ga2pSy-jpjP_reeXzknB3AKtEnaiLPOaw&oe=660E79B0"
//                 name="Khabouchi Rawaa "
                
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// };

// const TestimonialItem = ({ text, image, name, position }) => {
//   return (
//     <div className="col-md-4 style-3">
//       <div className="tour-item">
//         <div className="tour-desc bg-white">
//           <div className="tour-text color-grey-3 text-center">{text}</div>
//           <div className="d-flex justify-content-center pt-2 pb-2">
//             <img className="tm-people" src={image} alt="" />
//           </div>
//           <div className="link-name d-flex justify-content-center">{name}</div>
//           <div className="link-position d-flex justify-content-center">{position}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
import React from 'react';
import "./Testimonials.css"; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section className="home-testimonial">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center testimonial-pos">
          <div className="col-md-12 pt-4 d-flex justify-content-center">
            <h3>Testimonials</h3>
          </div>
        </div>
        <section className="home-testimonial-bottom">
          <div className="container testimonial-inner">
            <Slider {...settings}>
              <TestimonialItem
                text="I've been using the K-Glow Radiance Serum for over a month now, and I'm absolutely loving it! My skin has never looked better. The serum has a lightweight texture that absorbs quickly into the skin without leaving any greasy residue"
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/415092627_7227880883942056_5498305136282029963_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kdz6AZeJ-n0AX_MZRBI&_nc_ht=scontent.ftun16-1.fna&oh=00_AfC8Sy4kJdT6gsuT2yG9X3J1-hyxz9DsTFwvKh4NhKjmmw&oe=660E4829"
                name="Jouini Hiba"
                
              />
              <TestimonialItem
                text="After just a few weeks of consistent use, I've noticed a significant improvement in the overall brightness and texture of my skin. My complexion looks more radiant and even-toned, and I've even received compliments from friends and family. I highly recommend this serum to anyone looking to achieve a healthy, glowing complexion"
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/331077014_1199203944295261_8523133215185294315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TJu9hTehOfsAX98wJmb&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBN6WpDyu0HsbTlUuMvsElrwPF9UfvazLg4C0YjKkBQJA&oe=660E6ED3"
                name="Chebbi Eya"
                
              />
              <TestimonialItem
                text="I've struggled with acne for years, trying countless products with little success. However, since I started using the K-Clear Acne Treatment, my skin has undergone a remarkable transformation. This product is a game-changer! "
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-F56VpAYciIAX-kwW7P&_nc_ht=scontent.ftun16-1.fna&oh=00_AfANH9_sHfpe-ga2pSy-jpjP_reeXzknB3AKtEnaiLPOaw&oe=660E79B0"
                name="Khabouchi Rawaa "
                
              />
            </Slider>
          </div>
        </section>
      </div>
    </section>
  );
};

const TestimonialItem = ({ text, image, name, position }) => {
  return (
    <div className="tour-item">
      <div className="tour-desc bg-white">
        <div className="tour-text color-grey-3 text-center">{text}</div>
        <div className="d-flex justify-content-center pt-2 pb-2">
          <img className="tm-people" src={image} alt="" />
        </div>
        <div className="link-name d-flex justify-content-center">{name}</div>
        <div className="link-position d-flex justify-content-center">{position}</div>
      </div>
    </div>
  );
};

export default Testimonials;
