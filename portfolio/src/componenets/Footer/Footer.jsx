import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-name">Hrishikesh Sarma</h2>

      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
      </ul>

      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61550501415102" style={{}}><FaFacebookF /></a>
        <a href="https://x.com/Hrishikesh4444"><IoClose /></a>
        <a href="https://www.linkedin.com/in/hrishikesh-sarma4444/"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/hrishikesh_4444/?hl=en"><FaInstagram /></a>
       
      </div>

      <p className="footer-copy">
        Copyright 2025 &copy; Hrishikesh Sarma- All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
