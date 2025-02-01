import React from "react";

const WorkItem = ({ item }) => {
  const { image, title, color, description } = item;
  console.log(color);

  return (
    <div className="min-h-[370px] w-[340px] bg-[#fff] rounded-[30px] drop-shadow-md flex flex-col relative">
      {/* Icon */}
      <div className=" mx-auto p-3 -mt-14">
        <img src={image} alt={title} className="size-[141px] p-5" />
      </div>
      {/* Content */}
      <div className="font-ubuntu text-center">
        <h3 className="text-[#242424] text-[24px] tracking-[0.2px] font-medium">
          {title}
        </h3>
        <p className="text-[#5E5777] leading-[28px] pt-5 px-[38px] pb-20">
          {description}
        </p>
      </div>
      {/* Bottom Border */}
      <div
        style={{ backgroundColor: color }}
        className="h-[11px] w-[81px] rounded-[30px] absolute -bottom-[4.5px] left-[130px]"
      ></div>
    </div>
  );
};

export default WorkItem;
