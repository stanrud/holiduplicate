import React from 'react';
import Carousel from 'nuka-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './image-carousel.style.css';

const ImageCarousel = ({ photos }) => (
  <Carousel
    height='380px'
    width='600px'
    enableKeyboardControls
    wrapAround
    renderBottomCenterControls={() => {}}
    renderCenterLeftControls={({ previousSlide }) => (
      <button className='btn-slider' onClick={previousSlide}>
        <FaChevronLeft />
      </button>
    )}
    renderCenterRightControls={({ nextSlide }) => (
      <button className='btn-slider' onClick={nextSlide}>
        <FaChevronRight />
      </button>
    )}
  >
    {photos.length > 0 && photos.map(f => <img src={f.m} alt={f.name} />)}
  </Carousel>
)

export default ImageCarousel;
