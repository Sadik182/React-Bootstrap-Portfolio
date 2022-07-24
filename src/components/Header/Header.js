import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">SR</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
