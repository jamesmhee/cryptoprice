import React, { useState, useEffect } from "react";
import { getAsset } from "../functions/Getdata";
import { useParams } from "react-router-dom";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

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
    window.scrollTo(0,0)
    fetchAsset(id);
  }, []);

  return (
    <div className="antialiased bg-light-bg max-h-screen h-screen dark:text-light-bg dark:bg-dark-bg mx-auto">
      <div className="py-5 flex flex-wrap md:flex-nowrap container list-none mx-auto">
        <div className="p-5 mx-1 md:mx-0 gap-10 border-2 dark:border w-full rounded-lg">
          <h1 className="text-xl inline-flex p-3 rounded-[100%] text-light-red font-semibold border-2 bg-light-elem dark:bg-dark-elem dark:border"># {coin?.rank} </h1>
          <span className="text-xl uppercase mx-2">{coin?.id}</span>
          <span className="text-sm text-zinc-500 uppercase mx2">{coin?.symbol}</span>
          <h2 className="mt-8 text-2xl md:text-[3.7rem] font-bold">{parseFloat(coin?.priceUsd).toLocaleString("en-US",{maximumFractionDigits: 0, style:"currency", currency:"USD"})} 
          <span className={`${coin?.changePercent24Hr > 0 ? "text-green-600" : "text-light-red"} mx-1 text-sm md:text-[1.5rem] font-semibold`}> {coin?.changePercent24Hr > 0 ? <AiFillCaretUp className="inline-flex"/> :<AiFillCaretDown className="inline-flex"/>}{parseFloat(coin?.changePercent24Hr).toFixed(2)}% (24h)</span></h2>          
          <hr className="my-2"></hr>
          <p className="mt-1 text-sm md:text-base"><span className="mr-1">Market Cap : </span>{parseFloat(coin?.marketCapUsd).toLocaleString("en-US", {maximumFractionDigits:0, style:"currency", currency:"USD"})}</p>
          <p className="mt-1 text-sm md:text-base"><span className="mr-1">Volume (24h) : </span>{parseFloat(coin?.volumeUsd24Hr).toLocaleString("en-US", {maximumFractionDigits:0, style:"currency", currency:"USD"})}</p>
          <p className="mt-1 text-sm md:text-base"><span className="mr-1">Supply : </span>{parseFloat(coin?.supply).toLocaleString("en-US", {maximumFractionDigits:0})} {coin?.symbol}</p>
          <p className="mt-1 text-sm md:text-base"><span className="mr-1">Max Supply : </span>{coin.maxSupply === null ? "∞" : (parseFloat(coin?.maxSupply).toLocaleString("en-US", {maximumFractionDigits:0}))} {coin?.symbol}</p>

        </div>
      </div>
    </div>
  );
};

export default Asset;
