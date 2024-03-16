import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Coin = () => {

  const [coin, setCoin] = useState({})
  const { coinId } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoin(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [url])

  return (
    <div>
      <h1>{coin.id}</h1>
    </div>
  )
}

export default Coin
