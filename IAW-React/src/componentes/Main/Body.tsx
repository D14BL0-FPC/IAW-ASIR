import React from 'react';
import './Body.css';

// 1. Imports de Bootstrap para el layout
import { Container, Row, Col, Image } from 'react-bootstrap';

// 2. Imports de Material-UI para el Autocomplete
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// 3. Importamos nuestro componente Card reutilizable
import InfoCard from './Infocard';

const cardData = [
  {
    imgSrc: 'https://pics.filmaffinity.com/k-558741331-mmed.jpg',
    title: 'K Project',
    text: 'El anime K Project sigue a Yashiro Isana, un estudiante aparentemente normal que se ve envuelto en un conflicto entre clanes sobrenaturales en Tokio.'
  },
  {
    imgSrc: 'https://i.ebayimg.com/images/g/-LUAAOSwfyVcwunZ/s-l1200.jpg',
    title: 'Tenshei shitara Slime Datta Ken',
    text: 'El anime tensei shitara slime datta ken sigue a Satoru Mikami, un hombre de 37 años que es asesinado y reencarnado en un mundo de fantasía como un slime con habilidades únicas.'
  },
];

// Datos para el Autocomplete de MUI
const marvelHeroes = [
  { label: 'Iron Man' }, { label: 'Captain America' }, { label: 'Thor' },
  { label: 'Hulk' }, { label: 'Black Widow' }, { label: 'Hawkeye' },
  { label: 'Spider-Man' }, { label: 'Black Panther' }, { label: 'Doctor Strange' }
];

const Body: React.FC = () => {
  return (
    <div className="body-component">
      
      {/* --- ASIDE (Sidebar) --- */}
      <aside className="sidebar">
        <h3>Panel Lateral</h3>
        
        {/* Widget de MUI Autocomplete */}
        <div className="widget">
          <h5>Elige tu Héroe de Marvel</h5>
          <Autocomplete
            disablePortal
            id="marvel-heroes-autocomplete"
            options={marvelHeroes}
            sx={{ 
              width: '100%',
              // Estilos para que MUI se vea bien en el sidebar oscuro
              "& .MuiInputLabel-root": { color: 'white' },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: 'white' },
                "&:hover fieldset": { borderColor: 'white' },
                "&.Mui-focused fieldset": { borderColor: 'white' },
                "& input": { color: 'white' }
              }
            }}
            renderInput={(params) => <TextField {...params} label="Héroe" />}
          />
        </div>

        {/* Widget de Vídeo de YouTube */}
        <div className="widget">
          <h5>Vídeo Destacado</h5>
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder (Rick Astley)
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </aside>

      {/* --- CONTENT (Main/Section) --- */}
      <main className="content">
        <Container fluid>
          {/* Sección de Cards */}
          <h2>MI Top Animes</h2>
          <p>Top dos de mis animes favoritos</p>
          <Row className="g-4 mb-5">
            {/* Iteramos sobre los datos y pasamos las props a InfoCard */}
            {cardData.map((card, index) => (
              <Col md={4} key={index}>
                <InfoCard
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text={card.text}
                />
              </Col>
            ))}
          </Row>

          {/* Sección de Galería */}
          <h2>Galería de Fotos</h2>
          <Row className="g-3">
            <Col md={3} sm={6}>
              <Image src="" fluid rounded thumbnail />
            </Col>
            <Col md={3} sm={6}>
              <Image src="" fluid rounded thumbnail />
            </Col>
            <Col md={3} sm={6}>
              <Image src="" fluid rounded thumbnail />
            </Col>
            <Col md={3} sm={6}>
              <Image src="" fluid rounded thumbnail />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Body;