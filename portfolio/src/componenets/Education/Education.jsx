import React from "react";
import "./Education.css";
import nitLogo from "../../assets/nitSilchar.png";
import spsLogo from "../../assets/sps.jpeg";

const Education = () => {
  const educationData = [
    {
      title: "National Institute of Technology, Silchar",
      degree:
        "Bachelor of Technology - BTech, Computer Science and Engineering",
      duration: "Aug 2023 - Present",
      grade: "8.95 CGPA",
      description:
        "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at NIT Silchar. I have completed 4 semesters and have a CGPA of 8.95.",
      logo: `${nitLogo}`,
    },
    {
      title: "South Point School",
      degree: "AISSCE",
      duration: "Apr 2021 - Mar 2023",
      grade: "90.2%",
      description:
        "I completed my Class 12 higher secondary education at South Point School in Guwahati, with a focus on the Science stream. The experience helped me build a strong academic base and discipline.",
      logo: `${spsLogo}`,
    },
    {
      title: "South Point School",
      degree: "AISSE",
      duration: "Apr 2012 - Mar 2021",
      grade: "95.6%",
      description:
        "Studied at South Point School in Guwhati where I received a well-rounded education that emphasized academic rigor and personal development. The environment played a key role in shaping my foundational knowledge and values.",
      logo: `${spsLogo}`,
    },
  ];
  return (
    <div id="education" className="education">
      <div className="timeline-container">
        <h2 className="timeline-title">Education</h2>
        {/* <p className="timeline-subtitle">
        My education has been a journey of self-discovery and growth.
      </p> */}
        <div className="timeline">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-icon">
                <img src={item.logo} alt="logo" />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="degree">{item.degree}</p>
                <p className="duration">{item.duration}</p>
                <p className="grade">
                  <strong>Grade:</strong> {item.grade}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
