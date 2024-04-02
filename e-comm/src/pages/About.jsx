import React from 'react';
import './About.css'; 

function App() {
  return (
    
    <div className="App">
    
      <section id="home">
        <div className="home-left">
          <img src='https://umma.io/wp-content/uploads/2023/04/1597615_UMMABlog1_1000x1200_033123.jpg'>
          </img>
         
        </div>
        
        <div className="home-right">
          <h2 className="home-heading"> K-Glow </h2>
          <p className="home-para">LK-Glow est une marque de produits de soins de la peau qui se concentre sur la création de solutions innovantes et efficaces pour améliorer la santé et l'apparence de la peau. Fondée sur une approche scientifique et axée sur les résultats, K-Glow s'engage à offrir des produits de haute qualité qui répondent aux besoins variés des consommateurs en matière de soins de la peau.</p>
   
        </div>
      </section>

      <section id="workFlow">
        <h2 className="heading"> Thank you for choosing us  </h2>
        <p className="para">
           <br /> Thank you for your continued loyalty and partnership
           <br />  We look forward to serving you again in the future.</p>
        <div className="num-container">
          <div className="num-item"><span>27,882 <br />Customers</span></div>
          <div className="num-item"><span>90% <br />Action Plans</span></div>
          <div className="num-item"><span>70,592 <br />Downloads</span></div>
        </div>
      </section>

     

      <section id="our-Team">
        <h2>Our Member</h2>
        <div className="teamContainer">
          <div className="team-item">
            <img src='https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/414495882_2336161846579155_2915138723357318010_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m8AvGPnf9X8AX-uzX_n&_nc_ht=scontent.ftun16-1.fna&oh=00_AfCxvdcdgAnEFJPtxDqhdHVWmCoEy-A9BnLSsr8xLhbuog&oe=660FDA8A'>
            </img>
     
            <h5 className="member-name">Jouini Eya</h5>
            <span className="role">Co-Founder</span>
          </div>
          <div className="team-item">
          <img src='https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/376730335_1815847255513728_3693653158964586519_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-F56VpAYciIAX_uz6v8&_nc_ht=scontent.ftun16-1.fna&oh=00_AfB-jhONl9VGUA0TE8Pl3qBwJUQKWf6lqOzW0ji9FQsWnQ&oe=660FCB30'/>
         
            <h5 className="member-name">Khabouchi Rawaa</h5>
            <span className="role">seo expert</span>
          </div>
          <div className="team-item">
            <img src='https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/331077014_1199203944295261_8523133215185294315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7s9mnOI5GAMAX_MCBSd&_nc_ht=scontent.ftun16-1.fna&oh=00_AfDwqOUzj8yWNgc2girNjjnwrEu3wZksBC2xIaP2ZEGc7Q&oe=660FC053'>
            </img>
           
            <h5 className="member-name">Chebbi Eya</h5>
            <span className="role">seo expert</span>
          </div>
          
        </div>
      </section>

      
    </div>
  );
}

export default App;
