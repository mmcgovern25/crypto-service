import React from 'react'
import useAxios from './useAxios'
import { useParams } from 'react-router-dom';
import '../routes/Coin.css';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const { coinId } = useParams();
  const { response, loading, error } = useAxios(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=USD&days=365`);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!response || !response.prices) {
    return <div>No data available</div>;
  }

  const coinChartData = response.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'black', // Color of x-axis labels
        },
      },
      y: {
        ticks: {
          color: 'black', // Color of y-axis labels
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: capitalizeFirstLetter(coinId),  // Your title text
        color: 'black', // Color of the title text
        font: {
          size: 14, // Adjust font size as needed
        },
      },
      legend: {
        display: false, // Hide legend
      },
    },
  };


  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: coinId.toUpperCase(),
        data: coinChartData.map(value => value.y),
        borderColor: 'rgba(255, 255, 255, 0.5)', // White color with 50% opacity
backgroundColor: 'rgba(255, 255, 255, 0.5)', // White color with 50% opacity

      }
    ]
  };

  return (
    <div className='chart-container'>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
