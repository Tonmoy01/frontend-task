import React from "react";
import about from "../assets/about.png";

import rightArrow from "../assets/icon/rightArrow.png";

const About = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[36px] font-bold font-ubuntu text-[#242424]">
            What We Do?
          </h1>
          <div className="w-[103px] h-[2px] bg-[#F15B2D] mx-auto mt-8"></div>
        </div>
        {/* Content */}
        <div className="flex w-[1170px] mx-auto mt-[52px] mb-40">
          {/* Left Side */}
          <div className="bg-[#A6E2E2] px-9 py-16 space-y-6 font-ubuntu">
            <h3 className="text-2xl leading-9 tracking-[0.2px] font-medium text-[#242424]">
              Bulipe Tech is a <br /> dynamic and innovative <br /> company
            </h3>
            <p className="text-[12px] leading-[18px] text-[#242424]s">
              We empower individuals to unlock career opportunities through our
              proven Digital Skill Development program. Partnering with 300
              local organisations and 3,000+ global partners in 21 countries, we
              provide access to top U.S. certifications and salary-based
              employment starting at $250, with the potential to exceed $3,000
              through continuous up-skilling.
            </p>
            <button className="flex items-center gap-3 px-6 py-2 bg-[#004464] text-white text-[16px] rounded-[24px] bg-orange">
              Read More
              <span>
                <img src={rightArrow} alt="right-arrow" />
              </span>
            </button>
          </div>
          {/* Right Side */}
          <img src={about} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
