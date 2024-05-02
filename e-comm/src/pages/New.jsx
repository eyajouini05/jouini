import React from 'react';
import "./New.css"
const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre l'adresse e-mail du formulaire
    console.log("Adresse e-mail soumise :", e.target.email.value);
    // Réinitialiser le champ de l'adresse e-mail après la soumission
    e.target.email.value = '';
  };

  return (
    <section id="newsletter" className="py-5">
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="title text-center pt-3 pb-5">
            <h2 className="position-relative d-inline-block ms-4">Newsletter Subscription</h2>
          </div>

          <p className="text-center text-muted">Sign up for our weekly update and be the first to know about our specials and promotions</p>
          <form onSubmit={handleSubmit} className="input-group mb-3 mt-3">
            <input type="email" name="email" className="form-control" placeholder="Enter Your Email ..." required />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
