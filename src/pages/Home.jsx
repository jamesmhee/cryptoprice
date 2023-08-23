import React from "react";
import Table from "../components/Table";
import Switch from "../components/Switch";
import Search from "../components/Search";
const Home = () => {
  return (
    <div className="flex justify-center bg-light-bg dark:bg-dark-bg h-auto max-h-full">
      <div className="relative md:overflow-hidden shrink-0 bg-light-red dark:bg-dark-bg border-[1.7px] rounded-xl shadow-xl md:my-5 mx-1 my-2 px-2 md:px-1 w-auto max-w-full">
        <div className="flex justify-between">
          <Search />
          <Switch />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
