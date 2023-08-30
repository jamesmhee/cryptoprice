import React, { useEffect, useState } from "react";
import { getAssets } from "../functions/Getdata";
import { Link } from "react-router-dom";
import { MdAnalytics, MdSearch } from "react-icons/md";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import Switch from "./Switch";
import Skelton from "./Skelton"
const Table = () => {
  const [assets, setAssets] = useState([]);
  const [filteredText, setFilteredText] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAsset = async () => {
    try {
      const response = await getAssets();
      setAssets(response?.data);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(true);
  };

  useEffect(() => {
    fetchAsset();    
  }, [assets]);

  const filterAsset = (searchText) => {
    if (searchText.trim().length > 0) {
      const filter = assets.filter((asset) => {
        return (
          asset?.name.toLowerCase().includes(searchText.toLowerCase()) ||
          asset?.symbol.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setFilteredText(filter);
    } else {
      setFilteredText(assets);
    }
  };

  return (
    <>
      <div className="flex justify-between mb-3">
        <div className="inline-flex border p-1 bg-light-bg dark:bg-dark-bg w-auto dark:border-[1.5px] rounded-lg mt-2 relative">
          <div className="my-auto pointer-events-auto">
            <MdSearch className="border-r-2 dark:text-light-bg" size={25} />
          </div>
          <input
            className="text-xs md:text-base outline-0 px-1 bg-transparent dark:text-light-elem"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              filterAsset(e.target.value);
            }}
            value={searchText}
          />
        </div>
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
              {(filteredText.length > 0 ? filteredText : assets).map(
                (asset, index) => (
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
                        })} <span className={`${asset?.changePercent24Hr > 0 ? "text-green-700" : "text-light-red"} text-xs font-semibold`}> {asset?.changePercent24Hr > 0 ? <AiFillCaretUp className="inline-flex"/> :<AiFillCaretDown className="inline-flex"/>}{parseFloat(asset?.changePercent24Hr).toFixed(2)}% (24h)</span>
                      </td>
                      <td className="text-right hidden md:table-cell">
                        {parseFloat(asset?.marketCapUsd).toLocaleString(
                          "en-US",
                          {
                            maximumFractionDigits: 0,
                          }
                        )}
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
                )
              )}
            </>
          ) : (
            <Skelton/>
          )}
        </table>
      </div>
    </>
  );
};

export default Table;
