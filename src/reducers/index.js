import { combineReducers } from 'redux';
import offers from './offer';

const reducers = { offersStore: offers }

const rootReducer = combineReducers(reducers);

export default rootReducer;
