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
              src='../src/assets/img/banner1.png'
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
              src='../src/assets/img/banner2.png'
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
              src='../src/assets/img/banner3.png'
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
