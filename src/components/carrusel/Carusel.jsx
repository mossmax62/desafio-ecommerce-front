import React from 'react'
import { Carousel } from 'react-bootstrap'
import './PhotoCarousel.css'

const PhotoCarousel = () => {
  return (
    <div className='carousel-container'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://sergioescobar.cl/wp-content/uploads/2021/10/Reserva-auto-min.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>MDF</h3>
            <p>Tu próximo auto, más cerca de lo que imaginas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://acnews.blob.core.windows.net/imgnews/medium/NAZ_15261624c77b45fda2a1c8632061099a.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Autos nuevos</h3>
            <p>Sedanes, SUV, camionetas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://lh4.googleusercontent.com/proxy/Vsm5h0Amwc-cOhN5XI4189jkHM9ingzGLj36M0XVLdQ-gx2hAyg7OrRhKKp8P1xumyz6wAtjawVeKOQovPGGb3xZ2pRUaaughGSDdv0GJZxZi_mz_ui3xQWwOYFCTZyOFkjYUpN-zQYGxJFmpY_Uw-2O5inL_0S-lMnGN51QsSXuQuqyJKL7UwFWTuNTPEii6LQhysBjqZm8Hgeeo_rQ315xI3TUSg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Autos usados</h3>
            <p>Sedanes, SUV, camionetas</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PhotoCarousel
