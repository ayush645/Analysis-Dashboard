import React from 'react'
import "../CSS/Sidebar.css"
import side1 from "../images/side1.png"
import side2 from "../images/side2.png"
import side3 from "../images/side3.png"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sideItem">
        <img src={side1} alt="" />
        <p>Dashboard</p>

      </div>
      <div className="sideItem active">
        <img src={side2} alt="" />
        <p>Skill Test</p>

      </div>
      <div className="sideItem">
        <img src={side3} alt="" />
        <p>Internships</p>

      </div>

    </div>
  )
}

export default Sidebar