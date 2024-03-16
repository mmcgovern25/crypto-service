import CoinItem from './CoinItem';
import PropTypes from 'prop-types';
import './coins.css'

const Coins = ({ coins }) => {
  if (!coins) return null; // Handle case where coins is undefined

  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {coins.map(coin => (
          <CoinItem coins={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
};

Coins.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.object), // Validation for coins prop
};

export default Coins;
