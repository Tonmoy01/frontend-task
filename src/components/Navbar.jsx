import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/icon/avatar.png";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Programs",
    },
    {
      id: 4,
      name: "Locations",
    },
    {
      id: 5,
      name: "Career & Placement",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];

  return (
    <div className="max-w-[1920px] mx-auto bg-[#F2F2F2] h-[102px] flex font-ubuntu">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="logo" />
        <ul className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 font-medium transition text-[#004464] cursor-pointer text-[14px] hover:text-[#0786C0] uppercase"
            >
              {item.name}
            </li>
          ))}
          {/* Signup Button */}
        </ul>
        <button className="flex items-center gap-3 px-6 py-2 bg-[#F15B2D] text-white text-[16px] rounded-[24px]">
          Sign Up
          <span>
            <img src={avatar} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
