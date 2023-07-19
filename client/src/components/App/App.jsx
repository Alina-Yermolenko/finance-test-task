import './App.css';
import { TickerItem } from '../TickerItem/TickerItem';
import { setFetchInterval, setIsTickerOn, updateTicker } from '../../actions/actions';

import { useEffect } from 'react';
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux';

const PORT = process.env.PORT || 4000;

export const socket = io(`http://localhost:${PORT}`);

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isTickerOn = useSelector((state) => state.isTickerOn);
  const fetchInterval = useSelector((state) => state.fetchInterval);
  
  const handleIntervalChange = (e) => {
    dispatch(setFetchInterval(e.target.value));
  };

  useEffect(() => {
    socket.emit("start");

    socket.on('ticker', (...args) => {
      dispatch(updateTicker(...args));
    });

    return () => {
      socket.disconnect();
    };

  }, [dispatch]);

  const handleTickerToggle = () => {
    dispatch(setIsTickerOn(!isTickerOn));
  };

  useEffect(() => {
    if (!isTickerOn) {
      socket.disconnect();
    } else {
      socket.disconnect();
      socket.connect();
      socket.emit("start", fetchInterval);
    }
  }, [isTickerOn, fetchInterval])

  return (
    <>
      <header className="header">
        <div className="ticker-toggle">
          <label>
            <input type="checkbox" checked={isTickerOn} onChange={handleTickerToggle} />
            Fetch tickers
          </label>
        </div>
        <div className="interval-container">
          <label>
            Fetch Interval in ms:
            <input type="number" min="1000" step="1000" value={fetchInterval} onChange={handleIntervalChange} />
          </label>
        </div>
      </header>
      <div>
        {
          data.map((one, i) => {
            return (
              <TickerItem data={one} key={one.ticker + i} />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
