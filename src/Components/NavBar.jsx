import React from 'react';
import Logo from '../images/Logo_Blue_sm.jpg';
import Typography from '@material-ui/core/Typography';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div id='header'>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Row>
          <Col xs={3}>
            <div href="#home"><img src={Logo} alt='logo' id='logo'></img></div>
          </Col>
          <Col xs={7}>
            <div id='heading'>
              <Typography variant='h6' color='textSecondary' component='h6'>Lisa Canini</Typography>
              <Typography variant='body2' color='textSecondary' component='p'>Full Stack Web Developer</Typography>
            </div>
          </Col>
          <Col xs={1}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>

              </Nav>

            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>

    </div >
  );
};

