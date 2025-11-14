import React from 'react';
import { Card } from 'react-bootstrap';
interface InfoCardProps {
  imgSrc: string;
  title: string;
  text: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ imgSrc, title, text }) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default InfoCard;