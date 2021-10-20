import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'
const Register = () => {
  const {
    handleEmail,
    handlePassword,
    handleName,
    signInWithEmail,
    signInWithGoogle,
    setLoading,
    toggleLogin,
    isLogIn,
    error } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/"
  const handleGoogleSignIn = () => {
      setLoading(true)
    signInWithGoogle()
      .then(result => {
        history.push(redirect_uri)
      }).finally(() => setLoading(false))
  }
  return (
    <>
      <Form className='form-container px-5 mt-5'
        onSubmit={signInWithEmail}>
          <h2>Please {isLogIn?"Login":'Register'} </h2>
        {!isLogIn &&
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control onBlur={handleName} type="text" placeholder="Name " required />
            </Col>
          </Form.Group>
        }
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
          <div class="form-check">
            <input onChange={toggleLogin} class="form-check-input" type="checkbox"/>
            <label class="form-check-label" for="invalidCheck">
              Already Registered ??
            </label>
          </div>
        </Form.Group>
        <div>{error}</div>
        <Col className='ps-5' sm={{ span: 10, offset: 2 }}>
          <button className='btn btn-success btn-lg px-5 py-2 mb-4 mx-5' type="submit"> {isLogIn ? "Login" : 'Register'} </button>
          <button type="submit" className='btn btn-warning py-2 mx-5' onClick={handleGoogleSignIn}> <i className="fab fa-google"></i> Sign in Google</button>
        </Col>
      </Form>
    </>
  );
};

export default Register;

