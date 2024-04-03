import React from 'react';
import './About.css'; // Assurez-vous d'avoir le fichier style.css dans votre projet

const AboutUs = () => {
  return (
    <div>
      

      <section className="about">
        <h1>About Us</h1>
        <p style={{ fontWeight: 'bold' }}>K-Glow.....</p>
        <div className="about-info">
          <div className="about-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hIbFZhb54783YzsHHTFR-Hnp5Nd_hiIRAmICpfK3Jg&s" alt="Geeksforgeeks" />
          </div>
          <div>
            <p>Bienvenue sur notre site e-commerce dédié aux produits de soins coréens ! Plongez dans l'univers de la beauté coréenne et découvrez une vaste sélection de produits de soins de la peau provenant directement de Corée du Sud. Notre boutique en ligne offre une expérience de shopping unique, mettant en avant les meilleurs produits de marques réputées pour leur qualité et leur efficacité.</p>
         
          </div>
        </div>
      </section>
      
      <section className="about">
        <h1>Our Mission</h1>
        <p style={{ fontWeight: 'bold' }}>K-Glow.....</p>
        <div className="about-info">
          <div className="about-img">
            <img src="https://timesofindia.indiatimes.com/photo/104473165/104473165.jpg" alt="Geeksforgeeks" />
          </div>
          <div>
            <p>Bienvenue sur notre site e-commerce dédié aux produits de soins coréens ! Plongez dans l'univers de la beauté coréenne et découvrez une vaste sélection de produits de soins de la peau provenant directement de Corée du Sud. Notre boutique en ligne offre une expérience de shopping unique, mettant en avant les meilleurs produits de marques réputées pour leur qualité et leur efficacité.</p>
         
          </div>
        </div>
      </section>


      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
          {/* Card 1 */}
          <div className="cardd">
            <div className="card-img">
              <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/331077014_1199203944295261_8523133215185294315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7s9mnOI5GAMAX9I6J5X&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCwGIKkXKNUTI90f1-jeskStm6ujte6qbmw-aBTRbtwCg&oe=66122B13" alt="User 1" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Chebbi Eya</h2>
              <p className="card-role">CEO and Founder</p>
            
            </div>
          </div>
          {/* Card 2 */}
          <div className="cardd">
            <div className="card-img">
              <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/414495882_2336161846579155_2915138723357318010_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m8AvGPnf9X8AX_gVzWB&_nc_ht=scontent.ftun14-1.fna&oh=00_AfA3xAyypgFoNy4nDgftEciUSJorS3OXI7RGdploP7u-QA&oe=6612454A" alt="User 2" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Jouini Eya</h2>
              <p className="card-role">Co-Founder</p>
           
            </div>
          </div>
          {/* Card 3 */}
          <div className="cardd">
            <div className="card-img">
              <img src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c1cT07Xt6McAX_BwTRb&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDVGWdl_lXg1WpEnZo27R_-_n9Ly1-Q2GdSzdkeKEvHCQ&oe=661235F0" alt="User 3" />
            </div>
            <div className="card-info">
              <h2 className="card-name">Khabouchi Rawaa</h2>
              <p className="card-role">Co-Founder</p>
           
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default AboutUs;
