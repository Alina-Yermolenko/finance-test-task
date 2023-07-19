import { TICKER_UPDATE, SET_FETCH_INTERVAL, SET_IS_TICKER_ON } from '../actions/actionTypes';

const initialState = {
  data: [],
  previousPrice: null, 
  fetchInterval: 5000,
  isTickerOn: true,
};

const tickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKER_UPDATE:
      return {
        ...state,
        data: action.payload,
      };
      case SET_FETCH_INTERVAL:
      return {
        ...state,
        fetchInterval: action.payload,
      };
      case SET_IS_TICKER_ON:
      return {
        ...state,
        isTickerOn: action.payload,
      };
    default:
      return state;
  }
};

export default tickerReducer;
