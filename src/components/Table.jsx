import React, { useEffect, useState } from "react";
import { MdNumbers } from "react-icons/md";
import { getAssets } from "../functions/Getdata";
import { Link } from "react-router-dom"

const Table = () => {
  const [assets, setAssets] = useState([]);
  const fetch = async () => {
    try {
      getAssets()
      .then((res)=>setAssets(res.data.data))
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetch()
  }, [assets]);

  return (
    <div className="my-2 overflow-x-scroll md:overflow-hidden ">
      <table className="table-auto border-separate bg-light-bg dark:bg-dark-navy border-[1.5px] dark:border-none rounded-lg p-2 md:px-10 md:py-2">
        <thead className="text-lg text-dark-elem dark:text-light-elem">
          <tr className='text-left md:text-auto'>
            <th className="border-b-2"><MdNumbers/></th> 
            <th className="border-b-2">Name</th>
            <th className="border-b-2">Price</th>
            <th className="border-b-2">Market Cap</th>
            <th className="border-b-2">Volume (24H)</th>
          </tr>
        </thead>
        <tbody className="text-dark-elem dark:text-light-elem">
          {assets.map((asset, index) => (
            <tr key={asset.id}>
              <td><Link to={`/asset/`+asset.id}>{index+1}</Link></td>
              <td><Link to={`/asset/`+asset.id}>{asset.name}</Link></td>
              <td>{parseFloat(asset.priceUsd).toFixed(2)}</td>
              <td>{parseFloat(asset.marketCapUsd).toFixed(2)}</td>
              <td>{parseFloat(asset.volumeUsd24Hr).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
