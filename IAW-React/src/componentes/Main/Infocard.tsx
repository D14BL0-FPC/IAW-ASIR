import React from 'react';
import { Card } from 'react-bootstrap';

// 1. Quita "link" de la interfaz
interface InfoCardProps {
  imgSrc: string;
  title: string;
  text: string;
  // link: string; <-- BORRA ESTA LÍNEA
}

// 2. Quita "link" de los parámetros del componente
const InfoCard: React.FC<InfoCardProps> = ({ imgSrc, title, text /*, link*/ }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        
        {/* 3. BORRA ESTA LÍNEA COMPLETA */}
        {/* <a href={link} className="btn btn-primary">Ver más</a> */}

      </Card.Body>
    </Card>
  );
};

export default InfoCard;