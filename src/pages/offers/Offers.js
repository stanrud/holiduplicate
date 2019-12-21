import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/offer';
import Card from '../../components/CardUI';
import './offers.style.css';

class Offers extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOffers());
  }

  render() {
    const { offers } = this.props;
    return (
      <React.Fragment>
        <div className='container-offers'>
          {offers && offers.map(item => 
            <Card offer={item} />
          )}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  offers: state.offersStore.offers
});

export default connect(mapStateToProps)(Offers);