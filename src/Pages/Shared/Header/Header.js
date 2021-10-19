import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const { logOut ,user} = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top'>
      <Container>
        <Navbar.Brand className='fw-2'> HEALTH CARE </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/services'> Se </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/'>  </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/'>  </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/'>  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!user?.email ?
              <Nav><Nav.Link as={Link} to='/Register' >Register</Nav.Link>
                <Nav.Link as={Link} to='/login' >
                  Login
                </Nav.Link></Nav>
              :
              <Nav.Link onClick={logOut} >
                signOut
              </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
};



export default Header;