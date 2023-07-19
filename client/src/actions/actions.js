import { TICKER_UPDATE, SET_FETCH_INTERVAL, SET_IS_TICKER_ON } from './actionTypes';

export const updateTicker = (data) => {
  return {
    type: TICKER_UPDATE,
    payload: data,
  };
};

export const setFetchInterval = (interval) => ({
  type: SET_FETCH_INTERVAL,
  payload: interval,
});

export const setIsTickerOn = (isTicker) => ({
  type: SET_IS_TICKER_ON,
  payload: isTicker,
});
