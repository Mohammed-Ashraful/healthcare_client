import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/3WhWG2M/1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>HEALTH CARE </h1>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/bJ7vkHm/2.png"
            alt="Second slide"
          /> 
          <Carousel.Caption>
            <h1 className="text-dark">Our Emargencey Unit </h1>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab necessitatibus esse eum molestias reiciendis asperiores, hic corporis voluptatibus similique harum ea odit praesentium in animi! Delectus cumque enim amet non.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-img"
            src="https://i.ibb.co/6Fxf98G/3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Our all services are too good </h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;