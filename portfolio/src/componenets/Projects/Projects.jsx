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

const projects = [
  {
    title: "Food Delivery Website",
    date: "Mar 2025",
    description:
      "Built a React-powered front end with dynamic menus, shopping cart, and order summaries, consuming custom REST APIs for data operations.",
    tags: ["NodeJs", "ExpressJs", "React", "MongoDb", "Tailwind CSS"],
    image: `${foodDelImg}`,
    link: "https://github.com/Hrishikesh4444/Food-Delivery"
  },
  {
    title: "Video Call Website",
    date: "Jun 2025",
    description:
      "Built a full-stack video calling platform with real-time group calling, in-call chat, and screen sharing using WebRTC and socket.io.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Material UI", "Socket.io", "WebRTC"],
    image: `${videoCallImg}`,
    link: "https://github.com/Hrishikesh4444/Video-Call"
  },
  {
    title: "Zerodha Clone",
    date: "Feb 2025",
    description:
      "Recreated the user interface of Zerodha.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Tailwind CSS"],
    image: `${zerodhaImg}`,
    link: "https://github.com/Hrishikesh4444/Zerodha-clone"
  },
  {
    title: "Doctor Appointment Booking System",
    date: "Apr 2025",
    description:
      "Developed a full-stack web application for booking doctor appointments with three roles: Patient, Doctor, and Admin. Integrated Razorpay Payment Gateway for secure and smooth transaction flow during booking.",
    tags: ["NodeJS", "ExpressJs", "React", "MongoDB", "Tailwind CSS", "Razorpay"],
    image: `${doctor}`,
    link: "https://github.com/Hrishikesh4444/prescripto"
  },
  {
    title: "Spotify Clone",
    date: "Aug 2024",
    description:
      "Designed and built a responsive clone of Spotify’s user interface, including homepage, sidebar, playlists view, and player controls.",
    tags: ["HTML","CSS","Javascript"],
    image: `${spotify}`,
    link:"https://github.com/Hrishikesh4444/Spotify-Clone"
  },
  {
    title: "Dinosaur Game",
    date: "May 2025",
    description:
      "Built a Dinosaur Game with game physics, jump mechanics, score system, and collision detection logic.",
    tags: ["HTML","CSS","Javascript"],
    image: `${dinosaur}`,
    link:"https://github.com/Hrishikesh4444/Dinosaur-Game"
  },
  {
    title: "Space Invaders Game",
    date: "May 2025",
    description:
      "ecreated the classic Space Invaders arcade game with real-time shooting mechanics, enemy movement, and collision detection.",
    tags: ["HTML","CSS","Javascript"],
    image: `${spaceInvaders}`,
    link:"https://github.com/Hrishikesh4444/Space-Invaders-Game"
  },
  {
    title: "Weather Website",
    date: "Jul 2024",
    description:
      "Developed a responsive weather application that displays real-time weather data based on city input.",
    tags: ["HTML","CSS","Javascript"],
    image: `${weather}`,
    link:"https://github.com/Hrishikesh4444/weather-web"
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        {/* <p className="projects-subtitle">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p> */}
        <br /><br />
        <div className="project-cards">
          {projects.map((project, index) => (
            <div className="project-card" key={index}  onClick={() => window.location.href = `${project.link}`}>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
