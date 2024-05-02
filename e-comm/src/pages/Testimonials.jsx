
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
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/415092627_7227880883942056_5498305136282029963_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=76mZMQhts78Ab7fRrqR&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBpkIozFBojyvkYFKLyEESCSYe6NiCBhbWSOY3yXqR7eQ&oe=6621C76B"
                name="Jouini Hiba"
                
              />
              <TestimonialItem
                text="After just a few weeks of consistent use, I've noticed a significant improvement in the overall brightness and texture of my skin. My complexion looks more radiant and even-toned, and I've even received compliments from friends and family. I highly recommend this serum to anyone looking to achieve a healthy, glowing complexion"
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/403725847_6955786184482255_5170915013673658425_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f0-pOV8shSAAb6Gk0oy&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBB4DL9g4EJge6THzhM1ymemREJlUFr6I4szGojN7M7pA&oe=6621B4C8"
                name="Chebbi Eya"
                
              />
              <TestimonialItem
                text="I've struggled with acne for years, trying countless products with little success. However, since I started using the K-Clear Acne Treatment, my skin has undergone a remarkable transformation. This product is a game-changer! "
                image="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nQxqQOZ5APkAb5juYQt&_nc_ht=scontent.ftun16-1.fna&oh=00_AfD-_d9Pb4cNa9cSDQP3faAkAf4JIi0iKnFHP6Nyov6c_Q&oe=6621CFB0"
                name="Khabouchi Rawaa "
                
              />
                  <TestimonialItem
                text="I've struggled with acne for years, trying countless products with little success. However, since I started using the K-Clear Acne Treatment, my skin has undergone a remarkable transformation. This product is a game-changer! "
                image="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-1/420198860_3782287502058285_7365941624811952683_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v3bqN0G9g0MAb6SJjqT&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfCcAuzyu0grzg0HNVsXO3ksBJF4xnvAMEHHVuGTYxvqVw&oe=6632C1FD"
                name="Sliti Marwa "
                
              />
            </Slider>
          </div>
        </section>
      </div>
    </section>
  );
};

const TestimonialItem = ({ text, image,name, position }) => {
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
