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

import { DiGit, DiGithubBadge } from "react-icons/di";

const Skills = () => {
  const languageSkills = [
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];
  const frontendSkills = [
    { name: "React Js", icon: <FaReact /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];
  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ];
  const othersSkills = [
    { name: "Git", icon: <DiGit /> },
    { name: "GitHub", icon: <DiGithubBadge /> },
    { name: "Mysql", icon: <SiMysql /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "Bootsrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss/> },


  ];

  return (
    <div className="skills" id="skills">
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Here are some of my skills on which I have been working on.
        </p>
        <div className="skills-container">
          <div className="skills-box">
            <h3 className="frontend-title">Language</h3>
            {languageSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>

          <div className="skills-box">
            <h3 className="frontend-title">Frontend</h3>
            {frontendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>

          <div className="skills-box">
            <h3 className="frontend-title">Backend</h3>
            {backendSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>

          <div className="skills-box">
            <h3 className="frontend-title">Others</h3>
            {othersSkills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
