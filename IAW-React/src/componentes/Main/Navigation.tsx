import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaPhoneAlt, FaConciergeBell } from 'react-icons/fa';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Mi Web</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <FaHome className="me-1" />
              Inicio
            </Nav.Link>
            
            <Nav.Link href="#services">
              <FaConciergeBell className="me-1" />
              Servicios
            </Nav.Link>

            <Nav.Link href="#link">
              <FaPhoneAlt className="me-1" />
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;