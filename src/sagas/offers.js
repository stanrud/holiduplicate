import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  fetchOffersSuceess,
  fetchOffersFailed,
  fetchOfferDetailsSuceess,
  fetchOfferDetailsFailed
} from '../actions/offer';
import client from './client';

async function fetchOffersCall({ search, page }) {
  return await client.get(`/offers?searchTerm=${search}&pageIndex=${page}`);
}

function* fetchOffers(action) {
  try {
    const offers = yield call(fetchOffersCall, action);
    yield put(fetchOffersSuceess(offers.data.offers));
  } catch (e) {
    yield put(fetchOffersFailed(e));
  }
}

async function fetchOfferDetailsCall(id) {
  return await client.get(`/offers/${id}`);
}

function* fetchOfferDetails(action) {
  try {
    const { id } = action;
    const offer = yield call(fetchOfferDetailsCall, id);
    yield put(fetchOfferDetailsSuceess(offer.data));
  } catch (e) {
    yield put(fetchOfferDetailsFailed(e));
  }
}

export const makeFetchOffers = takeLatest('FETCH_OFFERS', fetchOffers);
export const makeFetchOfferDetails = takeLatest('FETCH_OFFER_DETAILS', fetchOfferDetails);
