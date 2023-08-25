import React, { useEffect, useState } from "react";
import { MdCurrencyExchange, MdSearch } from "react-icons/md";
import { getRates } from "../functions/Getdata";

const Switch = () => {
  const [currency, setCurrency] = useState([]);
  const [onPress, setOnPress] = useState(false);
  const fetchRate = async () => {
    try {
      const response = await getRates()
      setCurrency(response?.data)
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
    fetchRate()
  }, []);

  return (
    <>    
      <button
          id="buttonCurrency"
          onClick={handleButton}
          className="text-xs md:text-base border-[1.5px] rounded-lg mt-2 bg-light-bg dark:bg-dark-navy text-light-red cursor-pointer font-semibold dark:text-light-bg dark:hover:text-slate-900 hover:text-white hover:bg-light-red focus:font-semibold py-1 px-2"
        >
          <MdCurrencyExchange className="inline-flex mr-2" />
          Switch Currency
      </button>
      <div
        className={`${
          onPress ? "absolute" : "hidden"
         } top-14 right-2 border shadow-xl p-2 bg-light-bg dark:bg-dark-bg dark:border-[1.5px] rounded-lg`}
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
