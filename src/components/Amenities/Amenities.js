import React from 'react';
import './amenities.style.css';

const Amenities = ({ items }) => (
  <div className='amenities'>
    {items.map(i => <div className='amenity'>{i.value}</div>)}
  </div>
);

export default Amenities;
