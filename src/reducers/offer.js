import * as types from '../actionTypes/offer';

const defaultState = {
  isFetching: false,
  offers: [],
  offer: { photos: [] },
  total: 0
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.FETCH_OFFERS: {
      return {
        ...state,
        isFetching: true,
        page: action.page,
        search: action.search
      }
    }

    case types.FETCH_OFFERS_SUCCES: {
      return {
        ...state,
        offers: [...state.offers, ...action.data.offers],
        total: action.data.metaData.cursor.totalCount,
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

    case types.FETCH_OFFER_DETAILS: {
      return {
        ...state,
        isFetching: true,
        offer: defaultState.offer
      }
    }

    case types.FETCH_OFFER_DETAILS_SUCCES: {
      return {
        ...state,
        offer: action.data,
        isFetching: false
      }
    }

    case types.FETCH_OFFER_DETAILS_FAILED: {
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
