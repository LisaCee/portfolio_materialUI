import React from 'react';
import Logo from '../images/Logo_Blue_sm.jpg';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/navbar.css';

export default function NavBar() {
  return (
    <div id='header'>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="#home"><img src={Logo} alt='logo' id='logo'></img></Navbar.Brand>
        <div id='heading'>
          <h6>Lisa Canini</h6>
          <p>Full Stack Web Developer</p>
        </div>
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

