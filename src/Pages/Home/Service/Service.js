import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'
const Service = (props) => {
 
  const { img, name, id, description,icon } = props.service
  return (
    <Col className="m-0">
      <Card className='p-3 m-0 service'>
        <Card.Img variant="top" className='service-img' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{icon} - This is icon</p>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
          <Nav.Link as={Link}
            className='btn btn-primary text-white py-2 mx-5'
            to={`/service/${id}`}
          > Details </Nav.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;