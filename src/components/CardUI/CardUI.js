import React from "react";
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { FaBed, FaUserFriends } from 'react-icons/fa';
import "./card-ui.style.css";
 
const CardUI = ({ offer }) => {
  return (
    <Link to={`/offer/${offer.id}`} style={{ textDecoration: 'none' }}>
      <div className='card'>
        <div className='img-container'>
          <img src={offer.photos[0].m} alt={offer.details.name}  className='card-img' />
        </div>
        <div className='card-body'>
          <div className='body-name'>
            <span>{offer.details.name}</span>
          </div>
          <div className='body-details'>
            <FaBed /> {offer.details.bedroomsCount} Bedrooms
          </div>
          <div className='body-details'>
            <FaUserFriends /> {offer.details.guestsCount} Guests
          </div>
          <div className='body-details'>
            Price: {offer.price.daily} {offer.price.currency}
          </div>
          <Rating value={offer.rating.value} count={offer.rating.count} />
        </div>
      </div>
    </Link>
  );
};
 
export default CardUI;