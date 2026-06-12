import React from 'react'

import { FaGithub } from "react-icons/fa";
import profilepicture from '../../assets/profilepicture.jpg'
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";

import './heroSection.css'



const HeroSection = () => {

  let techIcons = [
    <SiHtml5 />,
    <FaCss3Alt />,
    <IoLogoJavascript />,
    <GrReactjs />
  ]


  return (
    <div className='heroSection'>
      {/* FIRST CONTAINER */}
      <div className='heroSection-firstContainer'>
        <div className='heroSection-firstContainer-leftSection'>
          <h1>Frontend ReactJS Developer</h1>


          <p>Hi, I'm <span>Muhammad Hamza</span>. A passionate Full Stack NextJS | MERN Stack | ReactJS Developer based in Karachi, Pakistan. 📍</p>


          <FaGithub className='icon'/>
        </div>

        {/* IMAGE CONTAINER */}
        <div className='heroSection-image'>
          <img src={profilepicture} alt="" />
        </div>
      </div>

      {/* SECOND CONTAINER */}
      <div>
        <h3>Tech Stack</h3>

        <span>|</span>

      <div>
        {techIcons.map((items) => (
          items
        ))}
      </div>
      </div>
    </div>
  )
}

export default HeroSection