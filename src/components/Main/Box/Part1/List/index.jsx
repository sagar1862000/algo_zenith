import React from "react";
import img1 from "../../../../../assets/PlayOutline.svg";
import img2 from "../../../../../assets/QuestionMarkCircleOutline.svg";
import img3 from "../../../../../assets/CodeOutline.svg";
import img4 from "../../../../../assets/DocumentDuplicateOutline.svg";
import img5 from "../../../../../assets/ClockOutlineWhite.svg";
const List = () => {
  const List = [
    { img: img1, title: "Video 1" },
    { img: img2, title: "Article 1" },
    { img: img3, title: "Quiz 1" },
    { img: img4, title: "Coding Exercise 1" },
    { img: img5, title: "Combined Resource 1" },
  ];
  return (
    <div className="w-full px-6">
      <div className="flex flex-col">
        {List.map((item, index) => (
          <div
            style={{
            //   borderWidth: "0.5px",
            //   borderStyle: "solid",
              borderImageSource:
                "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)",
              borderImageSlice: 1,
            }}
            key={index}
            className="flex h-[120px]  border-[0.1px] place-content-center items-center px-3  justify-between "
          >
            <div className="flex gap-3">
              <img className="h-[36px] w-[36px]" srcSet={item.img} />
              <div className=" font-bold text-[24px]">{item.title}</div>
            </div>
            <div className="flex gap-2">
              <img className="h-[36px] w-[36px]" srcSet={img5} />
              <div className="text-[#17384D] text-[24px] ">10:00</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
