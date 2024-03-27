import React from 'react';

function ContactUs() {
    return (
        <div className="mt-5 container ">
            
            <div className="contact-us-container">
    <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? Reach out to us!</p>
    </div>
    <div className="contact-content">
       
       
    </div>
</div>

            
            <div className="row">
                <div className="col-md-6 mt-auto">
                    <h2>Contact Information</h2>
                    <p>
                        <strong>Address:</strong> Tunisia 1110
                    </p>
                    <p>
                        <strong>Email:</strong> Eyajouini05@gmail.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +216 23954454
                    </p>
                    <h2>Business Hours</h2>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                </div>
                <div className="col-md-6">
                    <h2>Contact Form</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;


