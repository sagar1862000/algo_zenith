import React from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Box = () => {
  return (
    <div className="bg-white w-full ">
      <div className="flex flex-col">
        <Part1 />
        <Part2 />
        <Part3 />
      </div>
    </div>
  );
};

export default Box;
