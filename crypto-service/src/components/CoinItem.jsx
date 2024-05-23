import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './coins.css'
import { TrendingUp, TrendingDown } from '../icons/icons'
import commaNumber from 'comma-number';

const CoinItem = ({ coins }) => {
  return (
    <div className='coin-row bg-blue-gradient-hover'>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt='' />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${commaNumber(coins.current_price)}</p>
      <p className={coins.price_change_percentage_24h < 0 ? 'red-text' : 'green-text'}>
      {coins.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp /> }
      {coins.price_change_percentage_24h.toFixed(2)}%</p>

      <p className='hide-mobile'>${commaNumber(coins.total_volume)}</p>
      <p className='hide-mobile'>${commaNumber(coins.market_cap)}</p>
    </div>
  );
}

CoinItem.propTypes = {
  coins: PropTypes.shape({
    market_cap_rank: PropTypes.number,
    image: PropTypes.string,
    symbol: PropTypes.string,
    current_price: PropTypes.number,
    price_change_percentage_24h: PropTypes.number,
    total_volume: PropTypes.number,
    market_cap: PropTypes.number
  }).isRequired, // Add PropTypes validation for the coins prop
};

export default CoinItem;
