import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Appoinment = () => {
  const { user } = useAuth();
  return (
    <Form className='p-5 '>
      <Row className="mb-3">
        {/* Name  */}
        <Form.Group
          as={Col}
          md="4"
          className="position-relative"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={user.displayName}
          />

          <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* Email */}
        <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={user.email}
            />

          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group
          as={Col}
          md="6"
          className="position-relative"
        >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
          />
        </Form.Group>
        <Form.Group
          as={Col}
          md="3"
          className="position-relative"
        >
          <Form.Label>your problem</Form.Label>
          <Form.Control
          type="text"
          placeholder="Problem"
          />
          <Form.Control.Feedback type="invalid" tooltip>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          md="3"
          className="position-relative"
        >
          <Form.Label>Department</Form.Label>
          <Form.Control
          type="text"
            placeholder="Department"
          name="zip"
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default Appoinment;