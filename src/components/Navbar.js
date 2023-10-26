import React from 'react'
import logo from "../images/logo.png";
import profile from "../images/profile.png"
import "../CSS/Navbar.css"
22
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <div className="profile">
        <img src={profile} alt="No Profile" />
        <p>Ayush Maheshwari</p>

      </div>
    </div>
  )
}

export default Navbar