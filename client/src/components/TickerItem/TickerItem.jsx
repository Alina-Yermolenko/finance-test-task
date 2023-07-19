import React from 'react';
import './TickerItem.css';

export const TickerItem = ({ data }) => {
  const priceClassName = +data.change > 0 ? 'positive' : +data.change < 0 ? 'negative' : '';

  const date = data.last_trade_time && new Date(data.last_trade_time).toLocaleString('en-GB', { timeZone: 'UTC' });

  return (
    <div className='ticker__container'>
      <div className='ticker__block'>
        <div className="ticker-item ticker__name">{data.ticker}</div>
        <div className="ticker-item exchange">{data.exchange}</div>
        <div className="ticker-item last-trade-time">{date}</div>
      </div>
      <div className='ticker__block-right'>
        <div className="ticker-item ticker__price">${data.price}</div>
        <div className={`ticker-item ticker__change ${priceClassName}`}>{data.change} ({data.change_percent}%)</div>
        <div className="ticker-item ticker__dividend">${data.dividend} <i>Divident</i></div>
        <div className="ticker-item ticker__yield">{data.yield}% <i>Yield</i></div>
      </div>
    </div>
  )
}