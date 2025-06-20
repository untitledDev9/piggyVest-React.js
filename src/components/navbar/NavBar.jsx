import React from 'react'
import './NavBar.css'
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/icons/menu.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="nav-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-link">
          <a href="#">Save</a>
          <a href="#">Invest</a>
          <a href="#">Stories</a>
          <a href="#">FAQs</a>
          <a href="#">Resources</a>
        </div>
      </div>
      <div className="nav-btn">
        <button className="sign">Sign in</button>
        <button className="create">Create free account</button>
      </div>
      <div className="menu-icn">
        <img src={Menu} alt="" />
      </div>
    </nav>
  )
}

export default NavBar