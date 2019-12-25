import * as types from '../actionTypes/offer';

export function fetchOffers(page = 0, search = 'Mallorca, Spanien') {
  return {
    type: types.FETCH_OFFERS,
    page,
    search
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

export function fetchOfferDetails(id) {
  return {
    type: types.FETCH_OFFER_DETAILS,
    id
  }
}

export function fetchOfferDetailsSuceess(data) {
  return {
    type: types.FETCH_OFFER_DETAILS_SUCCES,
    data
  }
}

export function fetchOfferDetailsFailed(error) {
  return {
    type: types.FETCH_OFFER_DETAILS_FAILED,
    error
  }
}

export function setInitialize() {
  return {
    type: types.SET_INITIALIZE
  }
}

export function setPage(page) {
  return {
    type: types.SET_PAGE_INDEX,
    page
  }
}
