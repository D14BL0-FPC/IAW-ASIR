import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaPhoneAlt, FaConciergeBell } from 'react-icons/fa';
import './Navigation.css'; // <-- ¡IMPORTA EL CSS OTRA VEZ!

const Navigation: React.FC = () => {
  return (
    // CAMBIOS: 
    // 1. Quitamos bg="dark"
    // 2. Añadimos sticky="top"
    // 3. Añadimos className="custom-navbar"
    <Navbar variant="dark" expand="lg" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Mi Web</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* ...mismos Nav.Link ... */}
            <Nav.Link href="#home">
              <FaHome className="me-1" />
              Inicio
            </Nav.Link>
            
            <Nav.Link href="#link">
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