import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

describe('App component', () => {
  let store;

  beforeEach(() => {
    const initialStore = {
      data: [],
      isTickerOn: false,
      fetchInterval: 1000,
    };
    store = mockStore(initialStore);
  });

  test('handles ticker toggle correctly', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const toggleInput = getByLabelText('Fetch tickers');
    
    fireEvent.click(toggleInput);

    const actions = store.getActions();

    expect(actions).toEqual([{ type: 'SET_IS_TICKER_ON', payload: true }]);
  });


  test('handles interval change correctly', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const intervalInput = getByLabelText('Fetch Interval in ms:');
    expect(intervalInput.value).toEqual('1000');

    const actions = store.getActions();

    fireEvent.change(intervalInput, { target: { value: '3000' } });

    expect(actions).toEqual([{ type: 'SET_FETCH_INTERVAL', payload: '3000' }]);
  });
});
