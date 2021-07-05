import React from 'react';
import portfolio from '../Images/portfolio.png';
import '../App.css';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="HomeDivContainer">
      <div className="Div2Home">
          <img src={portfolio} alt="profile" className="image-pic" />

      </div>

      {/* Right side div for linkedin and git-hub */}
      
      <div className="RightDivHome">

        <div className="LinkDiv"> 
            <a href="https://www.linkedin.com/in/chinonso-ogbennia/" target="_blank" className="SideDivA"><SiLinkedin  className="FaLink"/></a>
        </div>
  

        <div className="GitDiv">
          <a href="https://github.com/Chinodev411" target="_blank" className="SideDivA"><FaGithub className="FaLink"/></a>

        </div> 

      </div>
      
    </div>
  )
}



export default Home;