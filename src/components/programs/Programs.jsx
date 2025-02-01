import React, { useState } from "react";
import bgImg from "../../assets/bg-img.png";
import program1 from "../../assets/program1.png";
import program2 from "../../assets/program2.png";
import program3 from "../../assets/program3.png";
import program4 from "../../assets/program4.png";
import program5 from "../../assets/program5.png";
import program6 from "../../assets/program6.png";

const Programs = () => {
  const programsData = [
    {
      id: 1,
      image: program1,
      title: "IT Support Specialist",
      price: "300",
      category: "support",
      rating: "5.0",
    },
    {
      id: 2,
      image: program2,
      title: "Digital Marketing",
      price: "300",
      category: "marketing",
      rating: "5.0",
    },
    {
      id: 3,
      image: program3,
      title: "Online Sales & Marketing",
      price: "300",
      category: "support",
      rating: "5.0",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "Digital Kill Development", value: "support" },
    { label: "Skill Development", value: "marketing" },
  ];

  const filteredProjects = programsData.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="max-h-[1680px] max-w-[1920px]"
    >
      <div className="container mx-auto pb-24">
        {/* Heading */}
        <div className="text-center mb-20 pt-24">
          <h1 className="text-[36px] font-bold font-ubuntu text-[#242424]">
            Our Programs
          </h1>
          <div className="w-[103px] h-[2px] bg-[#F15B2D] mx-auto mt-8"></div>
        </div>
        {/* Tab */}
        <div className="w-[1192px] mx-auto">
          <div className="flex flex-wrap gap-5 pt-[60px] pb-8 items-center justify-center">
            {filters.map((filter) => (
              <button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={
                  activeFilter === filter.value
                    ? "px-4 py-2 border border-[#545454] rounded-xl text-black text-[24px]"
                    : "px-3 py-1 rounded-md border border-[#545454] text-[24px]"
                }
              >
                {filter.label}
              </button>
            ))}
          </div>
          {filteredProjects.length > 0 ? (
            <div className="grid gap-11 md:grid-cols-2 lg:grid-cols-3 md:pt-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-[14px] border px-5 font-ubuntu pb-8"
                >
                  <img src={project.image} alt={project.title} className="" />
                  <div className="flex flex-col justify-start mt-8">
                    <div className="space-y-2">
                      <p className="text-[19px]">{project.title}</p>
                      <div className="flex justify-between">
                        <p className="text-[24px] font-bold">
                          {project.rating}
                        </p>
                        <p className="text-[24px] font-bold">
                          ${project.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p>More Info</p>
                      <button className="flex items-center gap-3 px-6 py-2 bg-[#F15B2D] text-white text-[16px] rounded-[6px]">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[24px]">No projects found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
