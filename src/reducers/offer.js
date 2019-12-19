import * as types from '../actionTypes/offer';

const defaultState = {
  isFetching: false,
  offers: [],
  offer: {}
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.FETCH_OFFERS: {
      return {
        ...state,
        isFetching: true
      }
    }

    case types.FETCH_OFFERS_SUCCES: {
      return {
        ...state,
        offers: action.data,
        isFetching: false
      }
    }

    case types.FETCH_OFFERS_FAILED: {
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    }

    default:
      return state;
  }
}
