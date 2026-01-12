import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
  >
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-4"></div>
      <p className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 px-8 py-10 rounded-2xl hover:border-white/50 transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center gap-3 p-4 bg-black border-2 border-zinc-800 hover:border-white/50 rounded-2xl transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;