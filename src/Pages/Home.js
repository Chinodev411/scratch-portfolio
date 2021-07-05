import React from 'react';
import portfolio from '../Images/portfolio.png';
import '../App.css';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

const Home = () => {
  return (
    <div className="HomeDivContainer">
      <div className="Div2Home">
      
          <img src={portfolio} alt="profile" className="image-pic" />

      </div>

      {/* Right side div for linkedin and git-hub */}
      
      <div className="RightDivHome">

        <div className="LinkDiv"> 
            <a href="https://www.linkedin.com/in/chinonso-ogbennia/" target="_blank" rel="noreferrer" className="SideDivA"><SiLinkedin  className="FaLink"/></a>
        </div>
  

        <div className="GitDiv">
          <a href="https://github.com/Chinodev411" target="_blank" rel="noreferrer" className="SideDivA"><FaGithub className="FaLink"/></a>

        </div> 

      </div>
      <div className="Intro-Div">
        <h3 className="H-Main-Text"> CHINONSO ANSELEM OGBENNIA</h3>
      </div>
      
      <div className="Footer-Div">
      
      <h4 className="Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
      <h4 className="Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
      </div>
      
    </div>
  )
}



export default Home;