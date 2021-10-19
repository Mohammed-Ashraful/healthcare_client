import React from 'react';
import { Card, Button, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'
const Service = (props) => {
  const a = () => {
    window.location.reload();
  }

  const { img, name, id, description } = props.service
  return (

    <Col className="m-0">
      <Card className='p-3 m-2 service'>
        <Card.Img variant="top" className='service-img' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description.slice(0, 200)}</Card.Text>
          <Nav.Link as={Link}
            className='bg-primary text-white px-5 py-2'
            to={`/service/${id}`}
            // onClick={a}
          > Details </Nav.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;