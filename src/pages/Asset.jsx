import React, { useState, useEffect } from "react";
import { getAsset } from "../functions/Getdata";
import { useParams } from "react-router-dom";

const Asset = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const fetchAsset = async () => {
    try {
      const response = await getAsset(id);
      setCoin(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchAsset(id);
  }, []);

  return (
    <div className="antialiased bg-light-bg max-h-screen h-screen dark:text-light-bg dark:bg-dark-bg mx-auto">
      <div className="py-5 container list-none text-center mx-auto">
        <ul className="p-5 border-2 dark:border w-full rounded-lg">
          <li className="text-lg"># {coin.rank}</li>
          <li className="uppercase">{coin.id}</li>
          <li>Price : {parseFloat(coin.priceUsd).toFixed(2)} USD</li>
        </ul>
      </div>
    </div>
  );
};

export default Asset;
