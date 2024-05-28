import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/Messi.jpg';
import img2 from '../images/Messi2.jpg';
import img3 from '../images/Messi3.jpg';
import '../style/slides.css'; // Importa el archivo CSS donde definirás los estilos

function Slide() {
  return (
    <div className='carousel-container'> {/* Envuelve el Carousel en un contenedor */}
      <Carousel className='carrusel'>
        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={img1}
            alt="Messi1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={img2}
            alt="Messi2" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img 
            className="d-block w-100" 
            src={img3}
            alt="Messi3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
