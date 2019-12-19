import { combineReducers } from 'redux';
import offers from './offer';

const reducers = { offers }

const rootReducer = combineReducers(reducers);

export default rootReducer;
