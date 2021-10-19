import React from 'react';
import { Form,Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Register.css'
const Register = () => {
  const history = useHistory();
  const {
    handleEmail,
    handlePassword,
    handleName,
    user,
    signInWithEmail,
    signInWithGoogle,
  setLoading} = useAuth();
  const handleGoogleSignIn = () => {
    setLoading(true)
    signInWithGoogle()
      .then(result => {
        history.push('./')
      }).finally(() => setLoading(false))
  }
  return (
    <>
      <Form className='form-container' onSubmit={signInWithEmail}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control onBlur={handleName} type="text" placeholder="Name " required />
          </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control onBlur={handleEmail} type="email" placeholder="Email" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 2, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button className='bg-success' type="submit">Register</Button>
          </Col>
        </Form.Group>
      </Form>

      <Button type="submit" onClick={handleGoogleSignIn}>Sign in Google</Button>
      <h1>{user?.email}</h1>
      </>
  );
};

export default Register;

