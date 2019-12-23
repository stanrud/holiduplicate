import React from "react";
import { Link } from 'react-router-dom';
import "./card-ui.style.css";
 
const CardUI = props => {
  return (
    <Link to={`/offer/${props.offer.id}`} style={{ textDecoration: 'none' }}>
      <div className='card'>
        <div className='img-container'>
          <img src={props.offer.photos[0].m} alt={props.offer.details.name}  className='card-img' />
        </div>
        <div className='card-body'>
          <div className='body-name'>
            <span>{props.offer.details.name}</span>
          </div>
          <div className='body-details'>
            Bedrooms: {props.offer.details.bedroomsCount}
          </div>
          <div className='body-details'>
            Guests: {props.offer.details.guestsCount}
          </div>
          <div className='body-details'>
            Price: {props.offer.price.daily} {props.offer.price.currency}
          </div>
          <div className='body-details'>
            Rating: {props.offer.rating.value} ({props.offer.rating.count})
          </div>
        </div>
      </div>
    </Link>
  );
};
 
export default CardUI;