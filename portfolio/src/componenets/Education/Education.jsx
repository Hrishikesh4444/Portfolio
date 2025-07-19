import React from "react";
import "./Education.css";
import nitLogo from "../../assets/nitSilchar.png";
import spsLogo from "../../assets/sps.jpeg";
import { motion } from "framer-motion";


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

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

  return (
    <motion.div
  id="education"
  className="education"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
>
  <div className="timeline-container">
    <motion.h2 className="timeline-title" variants={itemVariants} initial="hidden" whileInView="show">
      Education
    </motion.h2>

    <div className="timeline">
      {educationData.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          variants={itemVariants}
          initial="hidden" whileInView="show"
        >
          <motion.div className="timeline-icon" variants={logoVariants} initial="hidden" whileInView="show">
            <img src={item.logo} alt="logo" />
          </motion.div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p className="degree">{item.degree}</p>
            <p className="duration">{item.duration}</p>
            <p className="grade">
              <strong>Grade:</strong> {item.grade}
            </p>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

  );
};

export default Education;
