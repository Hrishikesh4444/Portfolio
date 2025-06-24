import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componenets/Navbar/Navbar'
import Banner from './componenets/Banner/Banner'
import Skills from './componenets/Skills/Skills'
import Projects from './componenets/Projects/Projects'
import Education from './componenets/Education/Education'
import Contact from './componenets/Contact/Contact'
import Footer from './componenets/Footer/Footer'

function App() {
  
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
