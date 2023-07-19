import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { TickerItem } from './TickerItem';
import '@testing-library/jest-dom/extend-expect';

describe('TickerItem component', () => {

});

const testData = {
  ticker: 'AAPL',
  exchange: 'NASDAQ',
  price: '123.45',
  change: '1.23',
  change_percent: '1.00',
  dividend: '0.50',
  yield: '1.50',
  last_trade_time: '2023-07-18T07:22:43.000Z',
};

test('renders ticker item with correct data', async () => {
  const { getByText } = render(<TickerItem data={testData} />);

  expect(getByText(testData.ticker)).toBeInTheDocument();
});

test('applies correct class based on change value', () => {
  const { getByText } = render(<TickerItem data={testData} />);
  const changeElement = getByText(`${testData.change} (${testData.change_percent}%)`);

  expect(changeElement).toHaveClass(
    +testData.change > 0 ? 'positive' : +testData.change < 0 ? 'negative' : ''
  );
});

