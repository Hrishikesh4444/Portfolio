import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { motion } from "framer-motion";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("About");
  const container = (delay) => ({
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  });
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <motion.div
            variants={container(0.4)}
            initial="hidden"
            whileInView="show"
          >
            Portfolio
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("about")}
            >
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
              >
                About
              </motion.div>
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("skills")}
            >
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
              >
                Skills
              </motion.div>
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("projects")}
            >
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
              >
                Projects
              </motion.div>
            </Nav.Link>

            <Nav.Link
              href="#education"
              className={
                activeLink === "education"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => setActiveLink("education")}
            >
              <motion.div
                variants={container(0.4)}
                initial="hidden"
                whileInView="show"
              >
                Education
              </motion.div>
            </Nav.Link>
          </Nav>
          <motion.div
            variants={container(0.4)}
            initial="hidden"
            whileInView="show"
          >
            <Button
              className="github"
              variant="dark"
              href="https://github.com/Hrishikesh4444"
            >
              Github
            </Button>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
