import React from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselImg1 from '../../assets/img/banner1.png'
import CarouselImg2 from '../../assets/img/banner2.png'
import CarouselImg3 from '../../assets/img/banner3.png'
import './PhotoCarousel.css'

const PhotoCarousel = () => {
  return (
    <div className='container'>
      <Carousel className='carousel slide'>

        <Carousel.Item>
          <div className='transbox'>
            <img
              className='d-block w-100 black-background'
              src={CarouselImg1}
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
              src={CarouselImg2}
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
              src={CarouselImg3}
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
