import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'
const Service = (props) => {
 
  const { img, name, id, description } = props.service
  return (
    <Col className="m-0">
      <Card className='p-3 m-0 service'>
        <Card.Img variant="top" className='service-img' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
          <Link
            className='bg-primary text-white px-5 py-2'
            to={`/service/${id}`}
          > Details </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;