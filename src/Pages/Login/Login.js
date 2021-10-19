import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  const sign = <FontAwesomeIcon icon={faSignInAlt} />
  const { signInWithGoogle, signInWithEmail, user, setLoading } = useAuth();
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
    <div>

      <Form className='form-container mt-5' onSubmit={signInWithEmail}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 2, offset: 2 }}>
            <Form.Check label="Already Registered ??" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-0">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" >Login in</Button>
          </Col>
        </Form.Group>
        <Button type="submit" onClick={handleGoogleSignIn}> <i className="fab fa-google"></i>  Sign in Google</Button>
      </Form>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Login;