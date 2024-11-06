import React from "react";
import img1 from "../../../../assets/ClockOutline.svg";
import img2 from "../../../../assets/ChartBarOutline.svg";
import img3 from "../../../../assets/DocumentDuplicateOutline.svg";
import img4 from "../../../../assets/VectorDown.svg";
const Part3 = () => {
  return (
    <div className="w-full px-6 py-5 rounded-xl  ">
      <div className="flex flex-col px-8 gap-1 ">
        <div className=" text-[#17384D] text-[24px] ">PART 3</div>
        <div className="flex justify-between ">
          <div className=" font-bold text-[28px] ">Lorem ipsum dolor sit amet</div>
          <div className="flex gap-4  text-[24px] text-[#17384D] ">
            <div className="flex place-content-center items-center gap-2 ">
              <img src={img1} className="h-[27px] w-[27px] " />
              <div className="">02:00:00</div>
            </div>
            <div className="flex place-content-center items-center gap-2 ">
              <img src={img2} className="h-[27px] w-[27px] " />
              <div className="">Medium</div>
            </div>
            <div className="flex place-content-center items-center gap-2">
              <img src={img3} className="h-[27px] w-[24px] " />
              <div className="">12</div>
            </div>
            <div className="flex place-content-center items-center">
              <img src={img4} />
            </div>
          </div>
        </div>
        <div className="flex mt-2 justify-end border-[1px] border-[#99E4FF] self-end bg-[#EFF5FF] ">
          0% Completed
        </div>
      </div>
    </div>
  );
};

export default Part3;
