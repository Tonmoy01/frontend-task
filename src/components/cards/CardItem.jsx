import React from "react";

const CardItem = ({ item }) => {
  const { icon, title, description } = item;

  return (
    <div className="min-h-[370px] w-[359px] bg-[#fff] rounded-[30px] drop-shadow-md flex flex-col px-8">
      {/* Icon */}
      <div className="bg-[#014463] mx-auto rounded-full p-3 -mt-14">
        <img
          src={icon}
          alt={icon}
          className="size-[141px] p-5 border-2 rounded-full bg"
        />
      </div>
      {/* Content */}
      <div className="pt-4 font-ubuntu">
        <h3 className="text-[#242424] text-[20px] leading-[28px] font-medium">
          {title}
        </h3>
        <p className="text-[#848484] leading-[28px] pt-5">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
