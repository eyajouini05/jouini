
// // import React from 'react';
// // import './Hero.css'; 

// // const Hero = () => {
// //   return (
// //     <div className="hero-container">
// //       <div className="hero-content">
// //         <div className="left-section">
// //           <h2>New Products</h2>
// //           <p>Discover our latest arrivals.</p>
// //           <button>Shop Now</button>
// //         </div>
// //         <div className="right-section">
      
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

// const Hero = () => {
//   return (
//     <Slider {...settings}>
//       <div>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IJfHX9t7kxX2ln3d0Cue-HUOiIeoR100xA&usqp=CAU" alt="Slide 1" />
//       </div>
//       <div>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlidF5ekXtIYkFglF2LoZQsa5BWvgBQw7Oiw&usqp=CAU" alt="Slide 2" />
//       </div>
//       <div>
//         <img src="data:image/jpeg;base64,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" alt="Slide 3" />
//       </div>
//     </Slider>
//   );
// };

// export default Hero;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css'; // Fichier de styles CSS pour la mise en page

const HeroPage = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        <div>
          <img src="https://miro.medium.com/v2/resize:fit:800/0*owLpcjmdWp5pomvO.png" alt="Slide 1" />
        </div>
        <div>
          <img src="https://hips.hearstapps.com/hmg-prod/images/best-korean-skincare-64c827d35fd07.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2021/08/02153431/jennie-glow2-min-scaled-1-1343x900-1.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroPage;
