import React, { useEffect, useState } from "react";
import { MdCurrencyExchange, MdSearch } from "react-icons/md";
import { getRates } from "../functions/Getdata";
import Search from "./Search";

const Switch = () => {
  const [currency, setCurrency] = useState([]);
  const [onPress, setOnPress] = useState(false);
  const fetchRate = async () => {
    try {
      getRates().then((res) => setCurrency(res.data.data));
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleButton = () => {
    const button = document.getElementById("buttonCurrency");
    button.addEventListener("click", () => {
      setOnPress(!onPress);
    });
  };
  useEffect(() => {
    fetchRate();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <Search/>
        <button
          id="buttonCurrency"
          onClick={handleButton}
          className="border-[1.5px] rounded-lg mt-2 bg-light-bg dark:bg-dark-navy text-light-red cursor-pointer font-semibold dark:text-light-bg dark:hover:text-slate-900 hover:text-slate-900 focus:font-semibold py-1 px-2"
        >
          <MdCurrencyExchange className="inline-flex mr-2" />
          Switch Currency
        </button>
      </div>
      <div
        className={`${
          onPress ? "" : "hidden"
        } shadow-xl p-2 bg-light-bg dark:bg-dark-bg dark:border-[1.5px] rounded-lg mt-2`}
      >
        <select
          className="w-full outline-0 bg-light-bg dark:bg-dark-bg dark:text-light-elem"
          id="cars"
        >
          <option value="">Select Currency</option>
          {currency.map((curr, index) => {
            return (
              <option className="outline-0 rounded-lg" key={index} value={curr.symbol}>
                {curr?.currencySymbol} {curr.symbol}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Switch;
