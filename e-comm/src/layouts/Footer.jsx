import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";


export default function Footer() {
    return (
        <MDBFooter style={{ backgroundColor: '#efd9d1' }} className='text-center text-lg-start text-muted position-fixed bottom-0 w-100'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}

                <div>
                    <a href='' className='me-4 text-reset'>
                    <FaFacebook />

                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FaInstagramSquare />
                    </a>
                    <a href='' className='me-4 text-reset'>
                    <FaTwitter />
                    </a>
                    {/* <a href='' className='me-4 text-reset'>
                    <CiMail />                    </a> */}
                    <a href='' className='me-4 text-reset'>
                    <FaTiktok />                    </a>
                    {/* <a href='' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a> */}
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3 '>
                    

                            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4 ' >
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon color='secondary' icon='gem' className='me-3' />
                                    Company name
                                </h6>
                                <p>
                                    Notre site web e-commerce de skincare products devrait offrir une expérience conviviale et engageante pour les utilisateurs tout en mettant en valeur les produits de soins de la peau.
                                </p>
                            </MDBCol>
                      


                       


                            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Help</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                      contact us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                       FAQ
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        accessibility

                                    </a>
                                </p>
                            </MDBCol>

                            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    tunis
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    eyajouini05@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 21623954454
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 21623954454
                                </p>
                            </MDBCol>
                            {/* <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon color='secondary' icon='home' className='me-2' />
                                    tunis
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                    eyajouini05@gmail.com
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 21623954454
                                </p>
                                <p>
                                    <MDBIcon color='secondary' icon='print' className='me-3' /> + 21623954454
                                </p>
                            </MDBCol> */}
                     
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}