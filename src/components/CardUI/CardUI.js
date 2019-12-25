import React from "react";
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { FaBed, FaUserFriends, FaMapPin } from 'react-icons/fa';
import "./card-ui.style.css";
 
const CardUI = ({ item }) => (
  <Link to={`/offer/${item.id}`} style={{ textDecoration: 'none' }}>
    <div className='card'>
      <div className='img-container'>
        <img src={item.photos[0].m} alt={item.details.name} className='card-img' />
        <div className='card-location'>
          <FaMapPin />{item.location.name}
        </div>
      </div>
      <div className='card-body'>
        <div className='body-name'>
          <span>{item.details.name}</span>
        </div>
        <div className='body-details'>
          <div className='room-details'>
            <div className='details-berdrooms'>
              <FaBed /> {item.details.bedroomsCount} Bedrooms
            </div>
            <div className='details-guests'>
              <FaUserFriends /> {item.details.guestsCount} Guests
            </div>
            <Rating value={item.rating.value} count={item.rating.count} />
          </div>
          <div className='details-price'>
            from
            <div className='price-currency'>
              {item.price.daily} {item.price.currency}
            </div>
            per night
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default CardUI;