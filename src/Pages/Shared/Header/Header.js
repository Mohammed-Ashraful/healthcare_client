import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const { logOut, user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
      <Container>
        <Navbar.Brand className='fs-1'> KS Hospital PVT LTD.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            <Nav.Link as={Link} to='/appoinment'>Appoinment </Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact </Nav.Link>

          </Nav>
          <Nav>
            {!user?.email ?
              <Nav.Link as={Link} to='/Register' >Register</Nav.Link> :
              <Nav.Link onClick={logOut} >
                signOut
              </Nav.Link>
            }
            <b className="text-white pt-2 px-5"> {user?.displayName}</b>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default Header;