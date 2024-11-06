import React from "react";
import Header from "./Header";
import List from "./List";

const Part1 = () => {
  return (
    <div className="bg-white mt-4 ">
      <div
        style={{
          border: "1px solid transparent",
          borderImageSource:
            "linear-gradient(180deg, rgba(164, 230, 255, 250) 12.84%, #A4E6FF 120.5%)",
          borderImageSlice: 1,
        }}
        className="flex  flex-col"
      >
        <div className="">
          <Header />
          <div className=" flex  ">
            <div className=" flex-[1] w-[100%] h-[10px] bg-[#172B4DD9] rounded-bl-[12px] "></div>
            <div className="flex-[2]"></div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Part1;
