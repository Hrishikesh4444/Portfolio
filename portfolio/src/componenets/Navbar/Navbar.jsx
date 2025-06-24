import React, { useState } from "react";
import {Container,Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";
const NavBar = () => {
    const [activeLink,setActiveLink]=useState("About");
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className={activeLink==="about"?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink("about")}>About</Nav.Link>

            <Nav.Link href="#skills" className={activeLink==="skills"?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink("skills")}>Skills</Nav.Link>

            <Nav.Link href="#projects" className={activeLink==="projects"?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink("projects")}>Projects</Nav.Link>

            <Nav.Link href="#education" className={activeLink==="education"?"active navbar-link":"navbar-link"} onClick={()=>setActiveLink("education")}>Education</Nav.Link>
          </Nav>
          <Button className="github" variant="dark" href="https://github.com/Hrishikesh4444">Github</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
