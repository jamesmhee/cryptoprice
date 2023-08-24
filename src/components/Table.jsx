import React, { useEffect, useState } from "react";
import { MdNumbers } from "react-icons/md";
import { getAssets } from "../functions/Getdata";
import { Link } from "react-router-dom";

const Table = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetch = async () => {
    try {
      getAssets().then((res) => setAssets(res?.data?.data));
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetch()
    .then(()=>setLoading(true))
  }, [assets]);

  return (
    <div className="mx-auto my-2 overflow-x-scroll scroll-hidden md:overflow-hidden ">
      <table className="w-full max-w-full table-auto border-collapse bg-light-bg dark:bg-dark-navy border dark:border-none">
        <thead className="text-lg text-dark-elem dark:text-light-elem">
          <tr className="text-left h-14 md:text-auto">
            <th className="pl-5 border-b-2">#</th>
            <th className="border-b-2">Name</th>
            <th className="text-center border-b-2">Price</th>
            <th className="text-right md:text-right border-b-2">Market Cap</th>
            <th className="pr-5 text-right md:text-right border-b-2">
              Volume (24H)
            </th>
          </tr>
        </thead>
        {loading ? (
          <tbody className="text-dark-elem dark:text-light-elem">
            {assets.map((asset, index) => (
              <>
                <tr
                  className="hover:bg-zinc-100 dark:hover:bg-slate-600 h-20 border-b dark:border-b"
                  key={asset.id}
                >
                  <td className="pl-5 text-sm">{index + 1}</td>
                  <td>
                    <Link to={`/asset/` + asset.id}>{asset?.name}</Link>
                  </td>
                  <td className="text-center">
                    {parseFloat(asset?.priceUsd).toFixed(2)}
                  </td>
                  <td className="text-right">
                    {parseFloat(asset?.marketCapUsd).toFixed(0)}
                  </td>
                  <td className="pr-5 text-right">{parseFloat(asset?.volumeUsd24Hr).toFixed(0)}</td>
                </tr>
              </>
            ))}
          </tbody>
        ) : (
          <tbody className="text-dark-elem dark:text-light-elem">
            <tr className="hover:bg-zinc-100 dark:hover:bg-slate-600 h-20 ">
              <td className="pl-5 animate-pulse h-20 w-auto">
                <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
              </td>
              <td className="animate-pulse h-20">
                <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
              </td>
              <td className="animate-pulse h-20">
                <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
              </td>
              <td className="animate-pulse h-20">
                <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
              </td>
              <td className="pr-5 animate-pulse h-20">
                <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
