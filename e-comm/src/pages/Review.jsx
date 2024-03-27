import React from 'react';
import './Review.css'
import { FaStar } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'Eya chebbi', rating: 4, comment: 'Great product, I love it!' },
  { id: 2, name: 'Jouini maram', rating: 5, comment: 'Excellent service, highly recommended.' },
  { id: 3, name: 'Rania', rating: 3, comment: 'Decent product, but could be better.' },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} color={i < rating ? '#ffc107' : '#e4e5e9'} />);
  }
  return (
    <div>
      {stars}
    </div>
  );
};

const Reviews = () => {
  return (
    <div>
    
      <h2 className="customer-reviews-title">Customer Reviews</h2>

      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.name}</h3>
          <StarRating rating={review.rating} />
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
