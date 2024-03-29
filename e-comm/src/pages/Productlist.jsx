// import React from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBBadge,
// } from "mdb-react-ui-kit";

// function ProductCard({ image, price }) {
//   return (
//     <MDBCol md="4" className="mb-4">
//       <MDBCard>
//         <MDBCardImage src={image} alt="Product" position="top" style={{ width: "300px", height: "200px" }} />
//         <MDBCardBody>
//           <h5 className="card-title">Product Name</h5>
//           <p className="card-text">Product Description</p>
//           <div className="d-flex justify-content-between align-items-center">
//             <MDBBadge bg="secondary" className="me-2">
//               $ {price}
//             </MDBBadge>
//             <button className="btn btn-primary">Add to Cart</button>
//           </div>
//         </MDBCardBody>
        
//       </MDBCard>
//     </MDBCol>
//   );
// }

// function App() {
//   return (
//     <MDBContainer className="my-5">
//       <h2 className="text-center mb-5">Product Listing</h2>
//       <MDBRow>
        
//         <ProductCard image="https://cafe24img.poxo.com/jolsejolse/web/product/medium/202403/c262e6bb06565ac586889ca7c77351ef.jpg" price="100" />
//         <ProductCard image="https://koreanskincare.nl/cdn/shop/files/230808mixsoon25281_4ceeb3c5-8a6a-407d-8067-271872e1b7ec_720x.jpg?v=1709807435" price="150" />
//         <ProductCard image="https://koreanskincare.nl/cdn/shop/files/AnuaHPCCO2_720x.jpg?v=1698388457" price="80" />
//         <ProductCard image="https://koreanskincare.nl/cdn/shop/files/BHA-5_720x.jpg?v=1685451353" price="100" />
//         <ProductCard image="https://koreanskincare.nl/cdn/shop/files/0O8A9851800_720x.jpg?v=1685458460" price="150" />
//         <ProductCard image="https://koreanskincare.nl/cdn/shop/files/1685435953_522957_720x.jpg?v=1693380960" price="80" />
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default App;
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBadge,
} from "mdb-react-ui-kit";

function ProductCard({ image, name, description, price }) {
  return (
    <MDBCol md="4" className="mb-4">
      <MDBCard>
        <MDBCardImage src={image} alt="Product" position="top" style={{ width: "300px", height: "200px" }} />
        <MDBCardBody>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <MDBBadge bg="secondary" className="me-2">
              $ {price}
            </MDBBadge>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}

function Productlist() {
  return (
    <MDBContainer className="my-5">
      <h2 className="text-center mb-5">Product Listing</h2>
      <MDBRow>
        <ProductCard
          image="https://cafe24img.poxo.com/jolsejolse/web/product/medium/202403/c262e6bb06565ac586889ca7c77351ef.jpg"
          name="rataplan"
          description="here is the best face cleanser."
          price="100"
        />
        <ProductCard
          image="https://koreanskincare.nl/cdn/shop/files/230808mixsoon25281_4ceeb3c5-8a6a-407d-8067-271872e1b7ec_720x.jpg?v=1709807435"
          name="mixon"
          description="the best exfoliator that you can find"
          price="150"
        />
        <ProductCard
          image="https://koreanskincare.nl/cdn/shop/files/AnuaHPCCO2_720x.jpg?v=1698388457"
          name="anua"
          description="this is the serum for eyes "
          price="80"
        />
         <ProductCard
          image="https://koreanskincare.nl/cdn/shop/files/1_682cef58-24ba-4006-b9d1-fc04d6bb4dcc_720x.jpg?v=1701261450"
          name="mixon"
          description="the best exfoliator that you can find"
          price="150"
        />
         <ProductCard
          image="https://koreanskincare.nl/cdn/shop/files/1685435953_522957_720x.jpg?v=1693380960"
          name="mixon"
          description="the best exfoliator that you can find"
          price="150"
        />
         <ProductCard
          image="https://koreanskincare.nl/cdn/shop/products/164cb4d237caa_720x.jpg?v=1701251518"
          name="mixon"
          description="the best exfoliator that you can find"
          price="150"
        />
      </MDBRow>
    </MDBContainer>
  );
}

export default Productlist;
