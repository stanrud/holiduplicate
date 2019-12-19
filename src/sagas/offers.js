import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  fetchOffersSuceess,
  fetchOffersFailed
} from '../actions/offer';
import client from './client';

async function fetchOffersCall() {
  return await client.get('/offers');
}

function* fetchOffers() {
  try {
    const offers = yield call(fetchOffersCall);
    yield put(fetchOffersSuceess(offers.data.offers));
  } catch (e) {
    yield put(fetchOffersFailed(e));
  }
}

export const makeFetchOffers = takeLatest('FETCH_OFFERS', fetchOffers);
