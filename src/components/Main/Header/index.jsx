import React from "react";
import img1 from "../../../assets/CalendarOutline.svg";
import img2 from "../../../assets/BriefcaseOutline.svg";
import img3 from "../../../assets//InformationCircleOutline.svg";
const Header = () => {
  return (
    <div className="w-[95%] mx-auto border-b-[1px] py-6 border-[#99E4FF] ">
      <div className="flex flex-row text-[22px]  justify-between ">
        <div
          style={{
            background:
              "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)",
          }}
          className="flex flex-row gap-12 rounded-[14.67px] w-[563px] h-[82px] text-black p-2 "
        >
          <div className="flex gap-2 w-[243px] h-[61px]  items-center place-content-center ">
            <img srcSet={img1} />
            <div>Mentor Sessions</div>
          </div>
          <div className="flex gap-2  w-[258px]  h-[61px] items-center bg-white rounded-[11px] py-[12px] px-[14px] place-content-center shadow-[0px_4px_4px_rgba(0,0,0,0.15)] ">
            <img srcSet={img2} className="h-[32px] w-[32px] " />
            <div className="font-bold text-[22px] " >Learning Material</div>
          </div>
        </div>
        <div className="flex gap-2 border-[1px] rounded-[12px] w-[204px] h-[61px] border-[#99E4FF] items-center place-content-center ">
          <img srcSet={img3}  />
          <div className=" text-[#172B4D] ">How it works</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
