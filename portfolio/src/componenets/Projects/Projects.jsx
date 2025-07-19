import React, { useState } from "react";
import "./Projects.css";
import foodDelImg from "../../assets/food-del.png";
import videoCallImg from "../../assets/video-call.png";
import zerodhaImg from "../../assets/zerodha.png";
import doctor from "../../assets/doctor.png";
import spotify from "../../assets/spotify.png"
import dinosaur from "../../assets/dinosaur.png";
import spaceInvaders from "../../assets/space-invaders.png";
import weather from "../../assets/weather.png"
import Hotel_booking from "../../assets/Hotel_booking.png"
import connectaImg from "../../assets/connecta.png"
import {easeInOut, motion} from 'framer-motion'

const projects = [
  {
    title: "Connecta - Social Networking Platform",
    date: "July 2025",
    description:
      "Connecta is a full-stack social networking platform, where users can build detailed profiles, connect with others, share posts, and engage through likes and comments. It features real-time connection requests, profile editing, and a modern responsive design.",
    tags: ["Node.js", "Express.js", "React.js", "Next.js", "MongoDb"],
    image: `${connectaImg}`,
    link: "https://github.com/Hrishikesh4444/Connecta",
    delay: 0.2
  },
  {
    title: "Food Delivery Website",
    date: "Mar 2025",
    description:
      "Built a React-powered front end with dynamic menus, shopping cart, and order summaries, consuming custom REST APIs for data operations.",
    tags: ["NodeJs", "ExpressJs", "React", "MongoDb", "Tailwind CSS"],
    image: `${foodDelImg}`,
    link: "https://github.com/Hrishikesh4444/Food-Delivery",
    delay: 0.4
  },
  {
    title: "Video Call Website",
    date: "Jun 2025",
    description:
      "Built a full-stack video calling platform with real-time group calling, in-call chat, and screen sharing using WebRTC and socket.io.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Material UI", "Socket.io", "WebRTC"],
    image: `${videoCallImg}`,
    link: "https://github.com/Hrishikesh4444/Video-Call",
    delay: 0.6
  },
  {
    title: "Zerodha Clone",
    date: "Feb 2025",
    description:
      "Recreated the user interface of Zerodha.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Tailwind CSS"],
    image: `${zerodhaImg}`,
    link: "https://github.com/Hrishikesh4444/Zerodha-clone",
    delay: 0.7
  },
  {
    title: "Hotel Viewing Website",
    date: "July 2025",
    description:
      "Created a hotel viewing website where users can explore hotels with details like location, type, and price, and leave reviews. Hotel owners can also edit their listings and manage hotel information easily",
    tags: ["NodeJS", "ExpressJs","ejs", "MongoDB", "Bootstrap"],
    image: `${Hotel_booking}`,
    link: "https://github.com/Hrishikesh4444/Havenly",
    delay: 0.2
  },
  {
    title: "Doctor Appointment Booking System",
    date: "Apr 2025",
    description:
      "Developed a full-stack web application for booking doctor appointments with three roles: Patient, Doctor, and Admin. Integrated Razorpay Payment Gateway for secure and smooth transaction flow during booking.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Tailwind CSS", "Razorpay"],
    image: `${doctor}`,
    link: "https://github.com/Hrishikesh4444/prescripto",
    delay: 0.4
  },
  {
    title: "Spotify Clone",
    date: "Aug 2024",
    description:
      "Designed and built a responsive clone of Spotify's user interface, including homepage, sidebar, playlists view, and player controls.",
    tags: ["HTML","CSS","Javascript"],
    image: `${spotify}`,
    link:"https://github.com/Hrishikesh4444/Spotify-Clone",
    delay: 0.6
  },
  {
    title: "Dinosaur Game",
    date: "May 2025",
    description:
      "Built a Dinosaur Game with game physics, jump mechanics, score system, and collision detection logic.",
    tags: ["HTML","CSS","Javascript"],
    image: `${dinosaur}`,
    link:"https://github.com/Hrishikesh4444/Dinosaur-Game",
    delay: 0.7
  },
  {
    title: "Weather Website",
    date: "Jul 2024",
    description:
      "Developed a responsive weather application that displays real-time weather data based on city input.",
    tags: ["HTML","CSS","Javascript"],
    image: `${weather}`,
    link:"https://github.com/Hrishikesh4444/weather-web",
    delay: 0.2
  },
];
  const fadeUp = (delay) => ({
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        easeInOut
      },
    },
  });

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <motion.section
      className="projects-section">
        <motion.h2 variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="show" className="projects-title">Projects</motion.h2>
        {/* <p className="projects-subtitle">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p> */}
        <br /><br />
        <div className="project-cards">
          {projects.map((project, index) => (
            <motion.div
            variants={fadeUp(project.delay)}
            initial="hidden"
            whileInView="show"
            className="project-card" key={index}  onClick={() => window.location.href = `${project.link}`}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-name">{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-desc">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
