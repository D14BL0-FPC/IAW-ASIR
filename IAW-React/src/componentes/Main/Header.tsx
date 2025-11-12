import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    // El fondo se aplica vía CSS
    <header className="header-component">
      <div className="header-content">
        <h1>IAW-React Fran</h1>
        <p></p>
      </div>
    </header>
  );
};

export default Header;