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
        </div>
      </div>
    </Link>
  );
};
 
export default CardUI;