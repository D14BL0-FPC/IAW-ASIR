import React from 'react';
import './App.css'; // Estilos para el layout principal

// Importamos los componentes desde su nueva ubicación
import Header from './componentes/Main/Header';
import Navigation from './componentes/Main/Navigation';
import Body from './componentes/Main/Body';
import Footer from './componentes/Main/Footer';

const App: React.FC = () => {
  return (
    // Contenedor flex principal (Vertical)
    <div className="pagina-container">
      
      <Header />
      <Navigation />
      <Body />
      <Footer />

    </div>
  );
};

export default App;