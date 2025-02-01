import React from "react";

import card1 from "../assets/icon/card1.png";
import card2 from "../assets/icon/card2.png";
import card3 from "../assets/icon/card3.png";
import CardItem from "./CardItem";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      icon: card1,
      title: "Master In-Demand Digital Skills to Advance Your Career",
      description:
        "Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!",
    },
    {
      id: 2,
      icon: card2,
      title: "Earn Vendor Certifications and Join Us",
      description:
        "Our post-training assessments connect you with leading U.S. certification providers. Join over 3,000 global partners across 21+ countries and begin your career today!",
    },
    {
      id: 3,
      icon: card3,
      title: "Start Earning BDT 30,000 Monthly and Grow Your Skills",
      description:
        "Salary-based employment starting at BDT 30,000, with the potential to exceed BDT 3,00,000+ as you up-skill and master new digital skills. Your earning potential is limitless.",
    },
  ];

  return (
    <div className="max-w-[1920px] mx-auto mb-[168px]">
      <div className="container mx-auto">
        <div className="flex gap-8 justify-center">
          {cardData.map((item) => (
            <div className="-mt-[100px]">
              <CardItem key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
