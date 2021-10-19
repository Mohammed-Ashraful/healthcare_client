import React from 'react';
import { FormControl, InputGroup ,Button} from 'react-bootstrap';

const Footer = () => {
  return (
    <div className=' bg-dark'>
        <div className="row text-white m-0">
        <div className="col-lg-4 col-md-4 col-12">
          <div className="my-5">
            <h3> Office Address</h3>
            <h1> 201 Stokes New York</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="my-5">
            <h3>24 X 7 online support</h3>
            <h1>info@plumbing.com</h1>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="my-5">
            <h3>Contact Us Free</h3>
            <h1>+1 (088) 456 888</h1>
          </div>
        </div>
      </div>
      <div className="row text-white m-0">
        <div className="col-lg-3 col-md-3 col-12">
          <h2>Our Services</h2>
          <p>About Us</p>
          <p>Service</p>
          <p>Doctors</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="mt-5">

            <h2 className='text-primary'>Sign Up To Get Latest Updates</h2>
            <InputGroup className="mb-3">
              <FormControl
                placeholder=" Your Email Address"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </div>
          <div className="">
            fa
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <h2>Opening Hours</h2>
          <p>Sat – Mon 08:00 AM – 05:00PM</p>
          <p>Thes – Wedne 09:00 AM – 06:00PM</p>
          <p>Wedne – Thur  10:00 AM – 05:00PM</p>
          <p>Friday  Emergency Only</p>
        </div>
      </div>
      <div>
        <h4>Copyright © 2020 Doctery All Rights Reserved.</h4>
      </div>

    </div>
  );
};

export default Footer;