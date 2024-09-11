import React from 'react'
import { Carousel } from 'react-bootstrap'
import './PhotoCarousel.css'

const PhotoCarousel = () => {
  return (
    <div className='container'>
      <Carousel className='carousel slide'>

        <Carousel.Item>
          <div className='transbox'>
            <img
              className='d-block w-100 black-background'
              src='https://sergioescobar.cl/wp-content/uploads/2021/10/Reserva-auto-min.jpg'
              alt='First slide'
            />
          </div>
          <Carousel.Caption>
            <h2 className='display-1'>MDF</h2>
            <p>Tu próximo auto, más cerca de lo que imaginas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className='transbox'>
            <img
              className='d-block w-100 black-background'
              src='https://acnews.blob.core.windows.net/imgnews/medium/NAZ_15261624c77b45fda2a1c8632061099a.jpg'
              alt='Second slide'
            />
          </div>
          <Carousel.Caption>
            <h2 className='display-1'>Autos nuevos</h2>
            <p>Sedanes, SUV, camionetas</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className='transbox'>
            <img
              className='d-block w-100 black-background'
              src='https://lh4.googleusercontent.com/proxy/Vsm5h0Amwc-cOhN5XI4189jkHM9ingzGLj36M0XVLdQ-gx2hAyg7OrRhKKp8P1xumyz6wAtjawVeKOQovPGGb3xZ2pRUaaughGSDdv0GJZxZi_mz_ui3xQWwOYFCTZyOFkjYUpN-zQYGxJFmpY_Uw-2O5inL_0S-lMnGN51QsSXuQuqyJKL7UwFWTuNTPEii6LQhysBjqZm8Hgeeo_rQ315xI3TUSg'
              alt='Third slide'
            />
          </div>
          <Carousel.Caption>
            <h2 className='display-1'>Autos usados</h2>
            <p>Sedanes, SUV, camionetas</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  )
}

export default PhotoCarousel
