import tickerReducer from './tickerReducer';
import { TICKER_UPDATE, SET_FETCH_INTERVAL, SET_IS_TICKER_ON } from '../actions/actionTypes';

describe('tickerReducer', () => {
  test('handles TICKER_UPDATE action correctly', () => {
    const initialState = {
      data: [],
      previousPrice: null,
      fetchInterval: 5000,
      isTickerOn: true,
    };
    const newData = [{ ticker: 'AAPL', price: 123.45 }];
    const action = { type: TICKER_UPDATE, payload: newData };

    const newState = tickerReducer(initialState, action);

    expect(newState.data).toEqual(newData);
  });

  test('handles SET_FETCH_INTERVAL action correctly', () => {
    const initialState = {
      data: [],
      previousPrice: null,
      fetchInterval: 5000,
      isTickerOn: true,
    };
    const newInterval = 2000;
    const action = { type: SET_FETCH_INTERVAL, payload: newInterval };

    const newState = tickerReducer(initialState, action);

    expect(newState.fetchInterval).toEqual(newInterval);
  });

  test('handles SET_IS_TICKER_ON action correctly', () => {
    const initialState = {
      data: [],
      previousPrice: null,
      fetchInterval: 5000,
      isTickerOn: true,
    };
    const newIsTickerOn = false;
    const action = { type: SET_IS_TICKER_ON, payload: newIsTickerOn };

    const newState = tickerReducer(initialState, action);

    expect(newState.isTickerOn).toEqual(newIsTickerOn);
  });

  test('returns current state for unknown action type', () => {
    const initialState = {
      data: [],
      previousPrice: null,
      fetchInterval: 5000,
      isTickerOn: true,
    };
    const action = { type: 'UNKNOWN_ACTION', payload: 'some data' };

    const newState = tickerReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
