import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Emergency.css'
const Emergency = () => {
  return (
    <div className="emergencys">
      <div className='emergency row m-0 px-5' id="appoinment ">
        <div className="col-lg-4 col-md-4 col-12 bg-success h-75 p-5 mt-5">
          <div className='bg-success text-white'>
            <h3>Emergency Case </h3>
            <h1>0278346</h1>
            <p>Call for any Emergency and Ambulance </p>
            <button className="btn btn-primary px-5">Contact</button>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <div className='bg-primary p-5 my-4'>
            <h1>Book Appoinment Toady!</h1>
            <Row className="align-items-center m-0">
              <Col sm={6} className="my-1">

                <Form.Control id="inlineFormInputName" placeholder="Name" />
              </Col>
              <Col sm={6} className="my-1">

                <Form.Control id="inlineFormInputName" placeholder="Phone" />
              </Col>
              <Col sm={6} className="my-1">

                <Form.Control id="inlineFormInputName" placeholder="Email" type="email" />
              </Col>
              <Col sm={6} className="my-1">

                <Form.Control id="inlineFormInputName" placeholder="Address" />
              </Col>
              <Col xs="auto" className="my-1">
                <Button className='btn-warning mt-3' type="submit">Submit</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;