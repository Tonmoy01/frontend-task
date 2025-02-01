import React from "react";
import WorkItem from "./WorkItem";

import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/03.png";

const Works = () => {
  const workItems = [
    {
      id: 1,
      image: img1,
      title: "Training",
      color: "#014463",
      description:
        "Our training programs, tailored to each subject matter and specialized courses, last at least 3 months and take place in our physical venues. Access to all course materials will be provided through the Bulipe App/repository, ensuring a comprehensive learning experience for all participants.",
    },
    {
      id: 2,
      image: img2,
      title: "Certification",
      color: "#F15B2D",
      description:
        "Upon completion of your desired course and training, each trainee must attend a central examination at their respective geographical headquarters of Bulipe. Upon passing, trainee graduates receive industry-recognized certifications trusted by employers globally.",
    },
    {
      id: 3,
      image: img3,
      title: "Employment",
      color: "#2ABCBF",
      description:
        "We guarantee confirmed job prospects and a base salary of BDT 30,000 for all Bulipe trainee graduates through our vast alumni network, partnerships with 350+ global businesses across Europe, America, Asia, and Africa.",
    },
  ];

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F2F2F2] pt-16">
      <div className="container mx-auto pb-[240px]">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-[36px] font-bold font-ubuntu text-[#242424]">
            How does it Work?
          </h1>
          <div className="w-[103px] h-[2px] bg-[#F15B2D] mx-auto mt-8"></div>
        </div>
        {/* Items */}
        <div className="flex justify-center gap-[74px]">
          {workItems.map((item) => (
            <WorkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
