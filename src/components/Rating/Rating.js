import React from 'react'
import PropTypes from 'prop-types';
import ReactRating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import './rating.style.css';

const Rating = ({ value, count }) => (
  <React.Fragment>
    {count > 0 &&
      <div className='rating-container'>
        <div className='rating-value'>
          {(value/20).toFixed(1)}
        </div>
        <ReactRating
          readonly
          className='rating-stars'
          initialRating={value/20}
          emptySymbol={<FaStar color='#AFAFAF' />}
          fullSymbol={<FaStar color='#ffcf43' />}
        />
        <div className='rating-count'>
        ({count})
        </div>
      </div>
    }
  </React.Fragment>
);

Rating.propTypes = {
  value: PropTypes.number,
  count: PropTypes.number
}

Rating.defaultProps = {
  value: 0,
  count: 0
}

export default Rating;
