import React, { useEffect, useState } from "react";
import { getAssets } from "../functions/Getdata";
import { Link } from "react-router-dom";
import { MdAnalytics } from "react-icons/md";
import Search from "./Search";
import Switch from "./Switch";

const Table = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAsset = async () => {
    try {
      const response = await getAssets();
      setAssets(response?.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchAsset();
      setLoading(true);
    };
    fetchData();
  }, [assets]);

  return (
    <>
      <div className="flex justify-between mb-3">
        <Search />
        <Switch />
      </div>
      <div className="mx-auto my-2 overflow-x-auto md:overflow-hidden rounded-lg">
        <table className="w-full max-w-full table-auto border-collapse bg-light-bg dark:bg-dark-navy border dark:border-none">
          <thead className="text-lg text-dark-elem dark:text-light-elem">
            <tr className="antialiased text-left h-16 md:text-auto">
              <th className="pl-5 border-b-2">#</th>
              <th className="border-b-2">
                Name <br></br>
                <span className="font-medium text-sm inline-block md:hidden">
                  Market Cap
                </span>
              </th>
              <th className="text-center border-b-2">Price</th>
              <th className="text-right md:text-right border-b-2 hidden md:table-cell">
                Market Cap
              </th>
              <th className="pr-5 text-right md:text-right border-b-2">
                Volume (24H)
              </th>
            </tr>
          </thead>
          {loading ? (
            <>
              {assets.map((asset, index) => (
                <tbody
                  key={asset.id}
                  className="antialiased text-dark-elem dark:text-light-elem font-medium"
                >
                  <tr className="hover:bg-zinc-100 dark:hover:bg-slate-600 h-20 border-b dark:border-b">
                    <td className="pl-5 text-sm">{index + 1}</td>
                    <td>
                      <Link to={`/asset/` + asset.id}>
                        {asset?.name}
                        <br></br>
                        <label className="cursor-pointer text-sm md:hidden">
                          <MdAnalytics className="inline-block fill-yellow-500 dark:fill-light-red" />{" "}
                          :{" "}
                          {parseFloat(asset?.marketCapUsd).toLocaleString(
                            "en-US",
                            {
                              maximumFractionDigits: 0,
                            }
                          )}
                        </label>
                      </Link>
                    </td>
                    <td className="text-center">
                      {parseFloat(asset?.priceUsd).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </td>
                    <td className="text-right hidden md:table-cell">
                      {parseFloat(asset?.marketCapUsd).toLocaleString("en-US", {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                    <td className="pr-5 text-right">
                      {parseFloat(asset?.volumeUsd24Hr).toLocaleString(
                        "en-US",
                        {
                          maximumFractionDigits: 0,
                        }
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </>
          ) : (
            <tbody className="text-dark-elem dark:text-light-elem">
              <tr className="hover:bg-zinc-100 dark:hover:bg-slate-600 h-20 ">
                <td className="pl-5 animate-pulse h-20 w-24">
                  <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
                </td>
                <td className="animate-pulse h-20 w-auto">
                  <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
                </td>
                <td className="animate-pulse h-20 md:w-64">
                  <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
                </td>
                <td className="animate-pulse h-20 hidden md:w-64 md:table-cell">
                  <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
                </td>
                <td className="pr-5 animate-pulse h-20 md:w-64">
                  <div className="h-2 bg-zinc-300 dark:bg-slate-800 rounded"></div>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Table;
