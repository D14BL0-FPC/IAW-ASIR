import Carousel from 'react-bootstrap/Carousel';
import './Galeria.css'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='/imagenes/solo leveling anime.jpg'/>
        <Carousel.Caption>
          <h3>Primera prueba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/imagenes/Imagen1.png'/>
        <Carousel.Caption>
          <h3>Segunda prueba</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/imagenes/2.jpg'/>
        <Carousel.Caption>
          <h3>Tercera prueba</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;