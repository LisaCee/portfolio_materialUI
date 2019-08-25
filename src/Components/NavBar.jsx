import React from 'react';
import '../styles/navbar.css';
// import Logo from '../images/Logo_Blue_sm.jpg';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

export default function NavBar() {
  return (
    <div id='header'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

