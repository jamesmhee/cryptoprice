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
    <div className="inline-flex">    
      <button
          id="buttonCurrency"
          onClick={handleButton}
          className="text-xs md:text-base border-[1.5px] rounded-lg mt-2 bg-light-bg dark:bg-dark-navy text-light-red cursor-pointer font-semibold dark:text-light-bg dark:hover:text-light-red hover:text-white hover:bg-light-red focus:font-semibold py-1 px-2"
        >
          <MdCurrencyExchange className="inline-flex mr-2" />
          Switch Currency
      </button>
      
        {onPress &&
        <div
          className="z-[9999] flex flex-wrap top-16 px-2 py-4 right-3 absolute w-8/12 justify-evenly md:justify-stretch border rounded-xl bg-light-elem dark:bg-dark-elem dark:text-light-elem"          
          id="cars"
        >
          {currency.map((curr, index) => {            
            return (
                <div  key={index} className="flex">
                  <div className="basis-80 inline-block rounded-lg border hover:text-light-red hover:bg-zinc-100 hover:font-semibold hover:dark:bg-dark-navy mx-2 my-1 p-3 cursor-pointer">
                    {curr?.currencySymbol} {curr.symbol}
                  </div>
                </div>             
            );
          })}
        </div>
        }
    </div>
  );
};

export default Switch;
