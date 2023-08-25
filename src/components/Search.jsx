import React, { useState, useContext } from "react";
import { MdSearch } from "react-icons/md";
import AssetsContext from "../context/AssetsContext";
import Table from "./Table";

const Search = () => {
  const [searchValue, setSearchValue] = useState([]);
  const assets = useContext(AssetsContext);

  const filterAsset = (searchText) => {
    const filter = assets.filter((asset) => {
      return asset?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filter)
  };

  return (
    <>
      <div className="inline-flex border p-1 bg-light-bg dark:bg-dark-bg w-auto dark:border-[1.5px] rounded-lg mt-2 relative">
        <div className="my-auto pointer-events-auto">
          <MdSearch className="border-r-2 dark:text-light-bg" size={25} />
        </div>
        <input
          className="text-xs md:text-base outline-0 px-1 bg-transparent dark:text-light-elem"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchValue(e.target.value);
            filterAsset(e.target.value);
          }}
          value={searchValue}
        />
      </div>
    </>
  );
};

export default Search;
