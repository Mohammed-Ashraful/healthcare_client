import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <Carousel>
        {/* This is carousel first item  */}
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/3WhWG2M/1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>KS Hospital </h1>
            <p className='text-warning'>The Hospital has a total of 99 beds – 89 In-Patient beds and 10 Day Care beds. The In-Patient specialties are General Medicine, General Surgery and Gynaecology. We also have an Urgent Care Centre incorporating a Local Injuries Unit and Medical Assessment Unit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* This is carousel second item  */}
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/bJ7vkHm/2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="text-dark">Our Emargencey Unit </h1>
            <p className='text-dark'> An emergency department (ED), also known as an accident & emergency department (A&E), emergency room (ER), emergency ward (EW) or casualty department, is a medical treatment facility specializing in emergency medicine, the acute care of patients who present without prior appointment either by their own means or by that of an ambulance. The emergency department is usually found in a hospital or other primary care center.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* This is carousel third item  */}

        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/6Fxf98G/3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Our all services are too good </h1>
            <p>Our service is the best in Bangladesh . We want to Developer our health sector</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;