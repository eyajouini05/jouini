import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

function App() {
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h4 className="mt-4 mb-5">
      <h4 className="mt-4 mb-5 display-4"><strong>Best Sellers</strong></h4>

        
      </h4>

      <MDBRow>
       
        
        <MDBCol md="12" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
              
                src="https://koreanskincare.nl/cdn/shop/files/BHA-5_720x.jpg?v=1685451353p"
                fluid
                style={{ width: "200px", height: "200px" }}
              />
              <a href="#!">
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                   
                      <span className="badge bg-danger ms-2">-10%</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">Corsx</h5>
              </a>
              
              <h6 className="mb-3">
                <s>$61.99</s>
                <strong className="ms-2 text-danger">$50.99</strong>
              </h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://koreanskincare.nl/cdn/shop/files/0O8A9851800_720x.jpg?v=1685458460"
                fluid
                style={{ width: "300px", height: "200px" }}
              />
              <a href="#!">
                <div className="mask">
                  <div class="d-flex justify-content-start align-items-end h-100"></div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">beauty of joseon</h5>
              </a>
              
              <h6 className="mb-3">$61.99</h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://koreanskincare.nl/cdn/shop/products/secret_key_Lemon_Sparkling_Peeling_Gel_beauty_korean_skincare_nederlands_1_570x.jpg?v=1578734221"
                fluid
                style={{ width: "220px", height: "200px" }}
              />
              <a href="#!">
                <div className="mask">
                  <div class="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-primary ms-2">New</span>
               
                      <span className="badge bg-danger ms-2">-10%</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-3">La neige</h5>
              </a>
              
              <h6 className="mb-3">
                <s>$61.99</s>
                <strong className="ms-2 text-danger">$50.99</strong>
              </h6>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;