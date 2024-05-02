
import React from 'react';
import "./About.css"
const AboutSection = () => {
    return (
        <section className="about">
            <h1>About Us</h1>
            <p style={{ fontWeight: 'bold' }}>
                Here the story of k-Glow..
            </p>
            <div className="about-info">
                <div className="about-img">
                    <img src="https://media.glamourmagazine.co.uk/photos/651be3e607b726a3ee5c7011/16:9/w_2580,c_limit/korean%20skincare%2012.1k%20031023%204%20COPY_L.jpg" />
                </div>
                <div>
                    <p>Chez K-Glow, nous croyons en la puissance transformative des soins de la peau coréens. Fondé par des passionnés de la beauté, notre site e-commerce est dédié à fournir à nos clients une sélection exclusive des meilleurs produits de soins de la peau coréens.
                        Notre mission est de révéler la beauté naturelle de votre peau en proposant des produits de qualité supérieure, formulés avec des ingrédients naturels et innovants. Nous nous engageons à vous offrir une expérience de soin de la peau holistique, où l'efficacité, la sécurité et l'éthique sont au cœur de tout ce que nous faisons.
                    </p>
                    {/* <button>Read More...</button> */}
                </div>
            </div >
            <div className="about-info">
                <div className="about-img">
                    <img src="https://images-stylist.s3-eu-west-1.amazonaws.com/app/uploads/2021/01/25171501/best-korean-skincare-products.png" />
                </div>
                <div>
                    <p>At K-Glow, our mission is to empower individuals worldwide to discover the transformative power of Korean skincare and embrace their unique beauty with confidence and joy.

                        We are committed to providing our customers with access to the highest quality skincare products, meticulously curated to harness the time-tested traditions and cutting-edge innovations of Korean beauty.
                    </p>
                  
                </div>
            </div >

        </section >
    );
}

export default AboutSection;
