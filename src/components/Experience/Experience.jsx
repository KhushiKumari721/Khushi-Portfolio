import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>

        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My work experience and the role I have taken in this organization
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-white"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`w-full flex items-center mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div className="w-full sm:w-[450px] bg-gray-900 border border-white rounded-2xl p-6 shadow-2xl backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition duration-300 hover:scale-105">

              {/* Header */}
              <div className="flex items-center space-x-5">

                <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>

                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium">Skills:</h5>

                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-14 h-14 rounded-full flex justify-center items-center">
              <img
                src={experience.img}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;