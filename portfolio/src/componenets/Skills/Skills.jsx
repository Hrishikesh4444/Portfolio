import React from "react";
import "./Skills.css"; // External CSS for styles
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript 
} from "react-icons/si";
import {
  SiRedux,
  SiR,
  SiC,
  SiCplusplus,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

import { DiGit, DiGithubBadge } from "react-icons/di";

const Skills = () => {
  const allSkills = [
    { name: "", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Typescript", icon:<SiTypescript  /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "React Js", icon: <FaReact /> },
    { name: "Next Js", icon: <SiNextdotjs /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Bootsrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <DiGit /> },
    { name: "GitHub", icon: <DiGithubBadge /> },
    { name: "Mysql", icon: <SiMysql /> },
  ];

  return (
    <div className="skills" id="skills">
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Here are some of my skills on which I have been working on.
        </p>
        <div className="skills-container">
          {allSkills.map((skill, index) => (
            <div className="skills-box" key={index}>
                {skill.icon} {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
