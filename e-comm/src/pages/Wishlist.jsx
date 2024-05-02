

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";
    import { useNavigate } from 'react-router-dom';
    
    export default function QuantityEdit() {
      const navigate=useNavigate()
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                         Wishlist cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          3 items
                        </MDBTypography>
                      </div>
   
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://ohlolly.com/cdn/shop/products/Ohlolly-Sioris-Time-Is-Running-Out-Mist-Renewed-3_400x.jpg?v=1664495795"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                     face
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                        cleanser
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                             44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                 
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://ohlolly.com/cdn/shop/products/Ohlolly-Urang-Rose-Ceramide-Cream-2019-A_400x.jpg?v=1574730407"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                          eye roller
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                          serum
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                            44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
             
    
                      <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                        <MDBCol md="2" lg="2" xl="2">
                          <MDBCardImage
                            src="https://ohlolly.com/cdn/shop/files/Etude_Soonjung_pH6.5WhipCleanser_2_400x.jpg?v=1699410611"
                            fluid className="rounded-3" alt="Cotton T-shirt" />
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3">
                          <MDBTypography tag="h6" className="text-muted">
                       lips
                          </MDBTypography>
                          <MDBTypography tag="h6" className="text-black mb-0">
                          lip balm
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="minus" />
                          </MDBBtn>
    
                          <MDBInput type="number" min="0" defaultValue={1} size="sm" />
    
                          <MDBBtn color="link" className="px-2">
                            <MDBIcon fas icon="plus" />
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="text-end">
                          <MDBTypography tag="h6" className="mb-0">
                             44.00
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                          <a href="#!" className="text-muted">
                            <MDBIcon fas icon="times" />
                          </a>
                        </MDBCol>
                      </MDBRow>
    
                    
    
                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" onClick={()=>navigate("Home")}/>  Back
                            to shop
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                 
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
    }