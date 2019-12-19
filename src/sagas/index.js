import { all } from 'redux-saga/effects';
import { makeFetchOffers } from './offers';

export default function* indexSaga() {
  yield all([ makeFetchOffers ]);
}
