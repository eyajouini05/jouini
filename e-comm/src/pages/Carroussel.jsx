import React from 'react';

function Carroussel() {
  const containerStyle = {
    backgroundImage: "url('https://cdn.shopify.com/s/files/1/0797/3299/8445/files/US_____PC_04_240314.jpg?v=1710494313')", // Remplacez 'chemin/vers/votre/image.jpg' par le chemin de votre image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // color: 'white',
    padding: '80px 0', // Equivalent to py-20 in Tailwind
  };

  const flexColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    lg: { width: '1/3' }, // Equivalent to lg:w-1/3 in Tailwind
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '50px',
    fontSize:'20px',
  };

 
  const heading2Style = {
    fontSize: '1.5rem',
    lg: { fontSize: '5rem' },
    lineHeight: '1.5', // Equivalent to leading-relaxed in Tailwind
    marginBottom: '8px',
  };
  const heading3Style = {
    fontSize: '1.5rem',
    lg: { fontSize: '5rem' },
    lineHeight: '1.5', // Equivalent to leading-relaxed in Tailwind
    marginBottom: '8px',
  };




  const buttonStyle = {
    fontSize: '1rem',
    backgroundColor: 'transparent', // Equivalent to bg-transparent in Tailwind
    color: 'black',
    border: '2px solid black',
    padding: '0.5rem 1rem', // Equivalent to py-2 px-4 in Tailwind
    borderRadius: '0.25rem', // Equivalent to rounded in Tailwind
    cursor: 'pointer',
    transition: 'background-color 0.3s, border-color 0.3s',
    hover: {
      backgroundColor: '#FFD700', // Equivalent to hover:bg-yellow-300 in Tailwind
      color: 'black', // Equivalent to hover:text-black in Tailwind
      borderColor: 'transparent', // Equivalent to hover:border-transparent in Tailwind
    },
  };

  return (
    <section style={containerStyle}>
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        
        <div style={flexColumnStyle}>
        <h1 className="shop-by-title text-center mt-5" style={{ textAlign: 'left' }}>Discover Now</h1>

          <h2 style={heading2Style}>Our new collection of products</h2>
        
         
          <a href="#" style={buttonStyle}>Explore Now</a>
        </div>
        <div style={{ ...flexColumnStyle, marginLeft: 0, lg: { width: '2/3' } }}>
   
        </div>
      </div>
    </section>
  );
}

export default Carroussel;
