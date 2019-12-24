import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../../components/ImageCarousel'
import { fetchOfferDetails } from '../../actions/offer';
import './offer-details.style.css';

class OfferDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch } = this.props;
    dispatch(fetchOfferDetails(id));
  }

  render() {
    const { offer } = this.props;
    return (
      <div className='container-o'>
        <div className='offer-container'>
          <Carousel>
            { offer.photos.length > 0 && offer.photos.map(f => <img src={f.m} alt={offer.name} />) }
          </Carousel>
        </div>
      </div>
    )
  }
}

OfferDetails.propTypes = {
  offer: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  offer: state.offersStore.offer
});

export default connect(mapStateToProps)(OfferDetails);
