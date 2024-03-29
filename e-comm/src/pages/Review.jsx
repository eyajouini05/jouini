import React from 'react';
import './Review.css'; // Assurez-vous d'avoir le fichier CSS correspondant

const reviews = [
  { id: 1, name: 'Alice', rating: 5, comment: 'Un produit exceptionnel !' },
  { id: 1, name: 'Rania', rating: 2, comment: 'Un produit simple !' },
  { id: 2, name: 'Bob', rating: 4, comment: 'Très bon, mais pourrait être amélioré.' },
  // Ajoutez plus d'avis ici...
];

const Review = ({ name, rating, comment }) => (
  <div className="review">
    <div className="review-header">
      <h3 className="review-name">{name}</h3>
      <div className="review-rating">{'⭐'.repeat(rating)}</div>
    </div>
    <p className="review-comment">{comment}</p>
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
   
      <div className="reviews-container">
        {reviews.map(review => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;