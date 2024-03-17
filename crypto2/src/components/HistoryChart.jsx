import React from 'react'
import useAxios from './useAxios'
import { useParams } from 'react-router-dom';

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

  const options = {
    responsive: true
  };

  const data = {
    labels: coinChartData.map(data => data.x),
    datasets: [
      {
        fill: true,
        data: coinChartData.map(data => data.y)
      }
    ]
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default HistoryChart;
