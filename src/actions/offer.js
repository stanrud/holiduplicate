import * as types from '../actionTypes/offer';

export function fetchOffers() {
  return {
    type: types.FETCH_OFFERS
  }
}

export function fetchOffersSuceess(data) {
  return {
    type: types.FETCH_OFFERS_SUCCES,
    data
  }
}

export function fetchOffersFailed(error) {
  return {
    type: types.FETCH_OFFERS_FAILED,
    error
  }
}
