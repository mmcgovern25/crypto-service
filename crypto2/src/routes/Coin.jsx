import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Chart from 'chart.js/auto'; // Import Chart.js
import '../components/coins.css';
import DOMpurify from 'dompurify';

const Coin = () => {
  const [coin, setCoin] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const { coinId } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    // Fetch coin data
    axios.get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch historical data
    const url2 = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=USD&days=365`;
    axios.get(url2)
      .then((res) => {
        setHistoricalData(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, coinId]);

  // Create a chart after historicalData is fetched
// Create a chart after historicalData is fetched
useEffect(() => {
  if (historicalData.length > 0) {
    const ctx = document.getElementById('historicalChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: historicalData.map((data) => new Date(data[0]).toLocaleDateString()),
        datasets: [{
          label: 'Price',
          data: historicalData.map((data) => data[1]),
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)'
            }
          }
        }
      }
    });
  }
}, [historicalData]);

  // Conditional rendering to handle cases where coin data is not yet available
  if (Object.keys(coin).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {/* Make sure coin.image exists before accessing its properties */}
              {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className='coin-price'>
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>


      <div className='content'>
        <table>
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
              <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
              <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
              <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
              <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
              <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>

            </tr>
          </tbody>
        </table>
      </div>

      <div className='content'>
        <div className='stats'>
          <div className='left'>
            <div className='row'>
              <h4>24 Hour Low</h4>
              {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
            </div>
            <div className='row'>
              <h4>24 Hour High</h4>
              {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
            </div>

          </div>
          <div className='right'>
          <div className='row'>
              <h4>Market Cap</h4>
              {coin.market_data.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
            </div>
            <div className='row'>
              <h4>Circulating Supply</h4>
              {coin.market_data ? <p>${coin.market_data.circulating_supply.toLocaleString()}</p> : null}
            </div>

            </div>
          </div>
        </div>

        <div className='content'>
  <canvas id='historicalChart' width='400' height='200'></canvas> {/* Insert Chart here */}
</div>

{/* Rest of the component */}


        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMpurify.sanitize(coin.description ? coin.description.en : '')
            }}>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
