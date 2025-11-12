import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
// Importamos iconos de redes sociales
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-component">
      <Container>
        <Row>
          {/* Columna de Redes Sociales */}
          <Col md={6} className="text-md-start text-center mb-3 mb-md-0">
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
              </a>
              <a href="https://x.com/D14BL0_FPC" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare />
              </a>
              <a href="https://www.instagram.com/franfpc_huo/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
              </a>
            </div>
          </Col>
          
          {/* Columna del IES */}
          <Col md={6} className="text-md-end text-center">
            <p className="mb-0">© 2025 IES Cura Valera</p>
            <p className="mb-0">C/ 04600 Huércal-Overa (Almería)</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;