import React from 'react'
import logoImage from '../../assets/logo.png'
import './header.css'

const Header = () => {


  let headerMenu = [
    {
      menuItemName: "Home",
      link: "/home"
    },
    {
      menuItemName: "About Me",
      link: "/aboutme"
    },
    {
      menuItemName: "Projects",
      link: "/projects"
    },
    {
      menuItemName: "Certificates",
      link: "/certificates"
    },
    {
      menuItemName: "Contact Me",
      link: "/contact"
    },
  ]



  return (

    <header className='header'>
      <img src={logoImage} alt="logo" />


      <ul className='menuItems'>
        {headerMenu.map((item) => (
          <li>{item.menuItemName}</li>
        ))}
      </ul>

    </header>
  )
}

export default Header