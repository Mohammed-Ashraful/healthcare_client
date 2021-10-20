import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
  return (
    <div className='bg-dark footer py-5'>
      <div className="row text-white m-0">
{/* All of service and other thing which is we provide in our hospital  */}
        <div className="col-lg-3 col-md-3 col-12 ps-5 p-2">
          <h2>Our Services</h2>
          <p>About Us</p>
          <p>Service</p>
          <p>Doctors</p>
          <p>Privacy Policy</p>
        </div>

        {/* contact with use and  subscribe to get news */}
        <div className="col-lg-6 col-md-6 col-12 p-2">
          <div className="mt-5">
            <h2 className='text-primary'>Subscribe To Get Latest Updates</h2>
            <InputGroup className="mb-3">
              <FormControl
                placeholder=" Your Email Address"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </div>
          {/* Our hospital's all social media link  */}
          <div className="fs-1 ps-5">
            <i className="px-3 fab fa-facebook"></i>
            <i className="px-3 fab fa-instagram"></i>
            <i className="px-3 fab fa-github"></i>
            <i className="px-3 fab fa-twitter"></i>
          </div>
        </div>
        {/* All of schedule in our hospital */}
        <div className="col-lg-3 col-md-3 col-12 ps-5 p-2 opening-time">
          <h2>Opening Hours</h2>
          <p>Sat – Mon 08:00 AM – 05:00PM</p>
          <p>Thes – Wedne 09:00 AM – 06:00PM</p>
          <p>Wedne – Thur  10:00 AM – 05:00PM</p>
          <p>Friday  Emergency Only</p>
        </div>
      </div>
      <div>
        <h4 className='pt-4 text-center text-white'>Copyright © 2020 Doctery All Rights Reserved.</h4>
      </div>

    </div>
  );
};

export default Footer;