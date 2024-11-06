import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Box from "./Box";

const Main = () => {
  return (
    <div
      className="w-full h-full border-[1px] border-[#A4E6FF]  bg-white "
    >
      <div className="flex flex-col">
        <Header />
        <div className="flex">
          <div className="flex-[2]">
            <Sidebar />
          </div>
          <div className="flex-[5]">
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
