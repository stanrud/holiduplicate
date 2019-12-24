import React from 'react';
import Carousel from 'nuka-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './image-carousel.style.css';

const ImageCarousel = ({ children }) => {
  return (
    <div className='container-o'>
      <div className='offer-container'>
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
          {children}
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel;
