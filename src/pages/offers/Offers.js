import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions/offer';

class Offers extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOffers());
  }

  render() {
    return (
      <div>
        Offers
      </div>
    )
  }
}

const mapStateToProps = state => ({
  offers: state.offers
});

export default connect(mapStateToProps)(Offers);