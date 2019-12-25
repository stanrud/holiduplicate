import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { FaMapPin } from 'react-icons/fa';
import { fetchOfferDetails } from '../../actions/offer';
import Carousel from '../../components/ImageCarousel'
import Amenities from '../../components/Amenities'
import Rating from '../../components/Rating';
import './offer-details.style.css';

const OfferDetails = ({ offer, match, dispatch }) => {
  const loadData = () => {
    const { id } = match.params;
    dispatch(fetchOfferDetails(id))
  };

  // eslint-disable-next-line
  useEffect(() => loadData(), []);

  return (
    <div className='offer-container'>
      <div className='offer-carousel'>
        <Carousel photos={offer.photos} />
      </div>
      <div className='details-container'>
        <div className='details-body'>
          <div className='details-name'>
            {offer.details.name}
          </div>
          <div className='details-location'>
            <FaMapPin /> {offer.location.name}
          </div>
          <Rating value={offer.rating.value} count={offer.rating.count} />
          <div className='details-general'>
            <div className='details-caption' >
              Amenities
            </div>
            <Amenities items={offer.amenities.AMENITY_GENERAL} />
          </div>
          <div className='details-description'>
            <div className='details-caption' >
              Description
            </div>
            {ReactHtmlParser(offer.details.description)}
          </div>
        </div>
      </div>
    </div>
  )
}

OfferDetails.propTypes = { offer: PropTypes.object.isRequired }

const mapStateToProps = state => ({ offer: state.offersStore.offer });

export default connect(mapStateToProps)(OfferDetails);
