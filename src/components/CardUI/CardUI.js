import React from "react";
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { FaBed, FaUserFriends, FaMapPin } from 'react-icons/fa';
import "./card-ui.style.css";
 
const CardUI = ({ offer }) => (
  <Link to={`/offer/${offer.id}`} style={{ textDecoration: 'none' }}>
    <div className='card'>
      <div className='img-container'>
        <img src={offer.photos[0].m} alt={offer.details.name} className='card-img' />
        <div className='card-location'>
          <FaMapPin />{offer.location.name}
        </div>
      </div>
      <div className='card-body'>
        <div className='body-name'>
          <span>{offer.details.name}</span>
        </div>
        <div className='body-details'>
          <div className='room-details'>
            <div className='details-berdrooms'>
              <FaBed /> {offer.details.bedroomsCount} Bedrooms
            </div>
            <div className='details-guests'>
              <FaUserFriends /> {offer.details.guestsCount} Guests
            </div>
            <Rating value={offer.rating.value} count={offer.rating.count} />
          </div>
          <div className='details-price'>
            <div className='price-from'>
              from
            </div>
            <div className='price-currency'>
              {offer.price.daily} {offer.price.currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default CardUI;
