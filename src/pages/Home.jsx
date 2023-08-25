import React from "react";
import Table from "../components/Table";
import Switch from "../components/Switch";
const Home = () => {
  return (
    <div className="flex justify-center bg-light-bg dark:bg-dark-bg min-h-screen h-auto max-h-full">
      <div className="md:overflow-hidden shrink dark:bg-dark-bg md:my-5 mx-1 my-2 w-full max-w-full">
        <div className="container relative bg-zinc-200 dark:bg-dark-bg mx-auto border rounded-xl p-2">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
