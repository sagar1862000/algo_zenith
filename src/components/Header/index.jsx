import React from 'react'
import img2 from "../../assets/Ellipse.svg";
import Bell from '../../assets/Bell.svg';
const Header = () => {
  return (
<div className="flex justify-end overflow-hidden flex-wrap gap-10 px-10 py-3.5 max-md:px-5">
      <div className="flex gap-5 items-center my-auto">
        <img
          loading="lazy"
          srcSet={Bell}
          className="object-contain shrink-0 self-stretch my-auto  rounded-md w-[49.6px] h-[52.4] "
        />
        <img
          loading="lazy"
          srcSet={img2}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[63px] h-[63px] "
        />
      </div>
      {/* <div className="flex gap-2 text-base leading-none text-black">
        <div className="flex flex-col place-content-center font-roboto ">
          <div className="font-medium">JASHAN SHARMA</div>
          <div className="flex justify-end font-normal text-[#757575]">Admin</div>
        </div>
        <img
          loading="lazy"
          srcSet={img2}
          className="object-contain shrink-0 rounded-full aspect-square w-[41px]"
        />
      </div> */}
    </div>
  )
}

export default Header;