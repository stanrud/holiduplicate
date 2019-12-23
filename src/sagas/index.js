import { all } from 'redux-saga/effects';
import { makeFetchOffers, makeFetchOfferDetails } from './offers';

export default function* indexSaga() {
  yield all([
    makeFetchOffers,
    makeFetchOfferDetails
  ]);
}
