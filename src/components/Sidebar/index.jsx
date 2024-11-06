import React from "react";
import img4 from "../../assets/ChartBarOutline.svg";
import img3 from "../../assets/LightBulbOutline.svg";
import img1 from "../../assets/Menu.svg";
import img5 from "../../assets/StarOutline.svg";
import img6 from "../../assets/UserGroupOutline.svg";
import img7 from "../../assets/ViewGridOutline.svg";
import img8 from "../../assets/ClipboardOutline.svg";

const Sidebar = () => {
  const menu = [
    { title: "AlgoZenith", img: img1 },
    { title: "Dashboard", img: img7 },
    { title: "Learn", img: img3 },
    { title: "Forums", img: img6 },
    { title: "Upskill", img: img8 },
    { title: "Contest", img: img4 },
    { title: "Leaderboard", img: img5 },
  ];

  const handleClick = (label) => {
    console.log("label : ", label);
    // setActiveMatrix(label);
    // navigate(`${label}`);
  };

  return (
    <div className="flex font-roboto flex-col h-screen mx-auto w-full bg-transparent">
      <div className="flex flex-col px-6 place-content-center">
        <div className="flex flex-col my-3 max-w-full gap-10 text-lg font-medium leading-none text-neutral-300">
          {/* <div className="flex flex-col justify-center pt-6 gap-6 whitespace-nowrap rounded min-h-[56px]"> */}
            {menu.map((item, index) => (
              <div
                key={index}
                className={`flex pl-3 items-center h-[64px] w-[267px] cursor-pointer rounded-[4px]   ${item.title === "Upskill" ? 'bg-[#D6F4FF] rounded-lg ':'' } `}
                onClick={() => handleClick(item.title)}
              >
                <div className="flex gap-4 justify-center items-center self-stretch px-1.5 my-auto">
                  <div className={`flex gap-3 justify-center items-start self-stretch px-2 py-1 my-auto ${item.title === "AlgoZenith"
                          ? "font-[1000] py-6 "
                          : "font-semibold"}
                         `}>
                    <img src={item.img} alt={`${item.title} icon`} />
                    <div
                      className={`py-1 text-[24px] text-[#172B4D] `}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
