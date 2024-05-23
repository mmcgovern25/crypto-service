import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMpurify from 'dompurify';
import './Coin.css';
import HistoryChart from '../components/HistoryChart';
import commaNumber from 'comma-number';

const AboutSection = ({ description }) => {
  // Function to split the description into paragraphs
  const createParagraphs = (text) => {
    const sentences = text ? text.split('. ') : [];
    const paragraphs = [];
    let currentParagraph = '';
    sentences.forEach((sentence, index) => {
      currentParagraph += sentence + '. ';
      if ((index + 1) % 5 === 0 || index === sentences.length - 1) {
        paragraphs.push(currentParagraph);
        currentParagraph = '';
      }
    });
    return paragraphs;
  };

  // Create paragraphs from the description
  const paragraphs = createParagraphs(description);

  return (
    <div className='about content bg-blue-gradient'>
      <h3 className='text-xl font-poppins anta-regular'>About</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(paragraph) }} style={{ marginTop: '1em', textIndent: '1em' }} />
      ))}
    </div>
  );
};

const Coin = () => {
  const [coin, setCoin] = useState({});
  const { coinId } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  // Conditional rendering to handle cases where coin data is not yet available
  if (Object.keys(coin).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='coin-container'>
        <div className='content bg-blue-gradient'>
          <h1 className='anta-regular font-poppins text-2xl'>{coin.name.toUpperCase()}</h1>
        </div>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient'  />
        <div className='content bg-blue-gradient'>
          <div className='rank font-poppins anta-regular'>
            <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading font-poppins anta-regular'>
              {coin.image ? <img src={coin.image.small} alt={coin.name} /> : null}
              <p>{coin.name}</p>
              {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
            </div>
            <div className='coin-price font-poppins anta-regular'>
              {coin.market_data?.current_price ? <h1>${commaNumber(coin.market_data.current_price.usd)}</h1> : null}
            </div>
          </div>
        </div>

        <div className='content bg-blue-gradient'>
          <table>
            <thead>
              <tr>
                <th className='bg-blue-gradient font-poppins '>1h</th>
                <th className='bg-blue-gradient font-poppins '>24h</th>
                <th className='bg-blue-gradient font-poppins '>7d</th>
                <th className='bg-blue-gradient font-poppins '>14d</th>
                <th className='bg-blue-gradient font-poppins '>30d</th>
                <th className='bg-blue-gradient font-poppins '>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p> : null}</td>
                <td className='font-poppins anta-regular text-center'>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

  <div className='content bg-blue-gradient'>
  <div className='stats font-poppins anta-regular'>
    <div className='left'>
      <div className='row'>
        <h4>24 Hour Low</h4>
        {coin.market_data?.low_24h ? <p>${commaNumber(coin.market_data.low_24h.usd)}</p> : null}
      </div>
      <div className='row'>
        <h4>24 Hour High</h4>
        {coin.market_data?.high_24h ? <p>${commaNumber(coin.market_data.high_24h.usd)}</p> : null}
      </div>
    </div>
    <div className='right'>
      <div className='row'>
        <h4>Market Cap</h4>
        {coin.market_data?.market_cap ? <p>${commaNumber(coin.market_data.market_cap.usd)}</p> : null}
      </div>
      <div className='row'>
        <h4>Circulating Supply</h4>
        {coin.market_data ? <p>${commaNumber(coin.market_data.circulating_supply)}</p> : null}
      </div>
    </div>
  </div>
</div>


        <div className='content bg-blue-gradient'>
          <div className='chart'>
            <HistoryChart />
          </div>
        </div>

        <AboutSection description={coin.description ? coin.description.en : ''} />
      </div>
    </div>
  );
};

export default Coin;
