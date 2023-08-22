import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
    const [onPress, setOnPress] = useState(true)

  return (
      <div
        className="shadow-xl p-1 bg-light-bg dark:bg-dark-bg w-auto dark:border-[1.5px] rounded-lg mt-2 relative">
        <div className="absolute my-auto pointer-events-auto">
            <MdSearch className="border-r-2 dark:text-light-bg" size={25} />            
        </div> 
        <input className="outline-0 pl-7 bg-transparent dark:text-light-elem" type="text" placeholder="Search"/>
      </div>      
  );
};

export default Search;
