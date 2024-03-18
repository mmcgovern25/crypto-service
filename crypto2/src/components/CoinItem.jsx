import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './coins.css'
import { TrendingUp, TrendingDown } from '../icons/icons'

const CoinItem = ({ coins }) => {
  return (
    <div className='coin-row feature-card-hover'>
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={coins.image} alt='' />
        <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>${coins.current_price.toLocaleString()}</p>
      <p className={coins.price_change_percentage_24h < 0 ? 'red-text' : 'green-text'}>
      {coins.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp /> }
      {coins.price_change_percentage_24h.toFixed(2)}%</p>

      <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${coins.market_cap.toLocaleString()}</p>
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
