import React from "react";

import avatar from "../assets/icon/avatar.png";
import iIcon from "../assets/icon/iIcon.png";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#004464] h-[765px]">
      <div className="container mx-auto h-screen flex justify-center items-center w-full px-9">
        {/* Left Side */}
        <div className="flex flex-col gap-3 text-white w-1/2">
          <h6 className="text-[18px] font-ubuntu">ELEVATING</h6>
          <h2 className="text-[52px] leading-[62.4px] font-syne">
            IT Service Industry <br /> with Digital Skills <br /> Development
          </h2>
          <p className="leading-[28px] w-[488px]">
            Bulipe Tech as a visionary agent collaborates with its parent
            companies from the USA and UK to bring forth a far-reaching Digital
            Skills Development project for the ever-changing workforce of
            Bangladesh.
          </p>

          {/* Button */}
          <div className="mt-[66px] flex gap-4">
            <button className="flex items-center gap-3 px-6 py-2 bg-[#F15B2D] text-white text-base font-ubuntu rounded-[24px] bg-orange">
              Sign Up
              <span>
                <img src={avatar} alt="" />
              </span>
            </button>
            <button className="flex items-center gap-3 px-6 py-2 bg-transparent text-[#f15b2d] text-base font-ubuntu border border-[#f15b2d] rounded-[24px] bg-orange">
              Sign Up
              <span>
                <img src={iIcon} alt="" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <img src={hero} alt="Hero image" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
