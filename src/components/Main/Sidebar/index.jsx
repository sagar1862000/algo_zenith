import React from "react";
import img1 from "../../../assets/ClockOutline.svg";
const Sidebar = () => {
  const Menu = [
    { item: "Chapter 1" },
    { item: "Chapter 2" },
    { item: "Chapter 3" },
    { item: "Chapter 4" },
    { item: "Chapter 5" },
  ];
  return (
    <div className="flex font-roboto flex-col mx-auto w-full bg-white">
      <div className="flex flex-col px-6 place-content-center">
        <div className="flex flex-col my-3 max-w-full gap-6 text-lg font-medium leading-none text-neutral-300">
          {Menu.map((item, index) => (
            <div
              key={index}
              style={{
                borderBottom: "0.5px solid transparent",
                borderImageSource:
                  "linear-gradient(90deg, rgba(143, 223, 255, 0) 0%, #8FDFFF 50%, rgba(143, 223, 255, 0) 100%)",
                borderImageSlice: 1,
              }}
              className={`flex pl-3 items-center cursor-pointer h-[82px] rounded-[4px] ${
                index === 0 ? "bg-[#EFF5FF]" : ""
              } `}
            >
              <div className="flex gap-4 justify-center items-center self-stretch px-1.5 my-auto">
                <div
                  className={`flex gap-5  justify-center items-start self-stretch px-2 py-2 my-auto ${
                    index === 0 ? "font-bold  " : " font-normal "
                  } `}
                >
                  <div className={`py-1 text-[24px] text-black`}>
                    {item.item}
                  </div>
                  {index === 0 ? (
                    <div className="flex ml-[70px] mt-[4px] items-center place-content-center gap-2 ">
                      <img srcSet={img1} className="h-6 w-6" />
                      <div className="text-[#608AD2] text-[22px]" >05:00:00</div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
