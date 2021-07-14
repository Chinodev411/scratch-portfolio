import React from 'react'
import '../App.css';
import { BiCopyright } from "react-icons/bi";

const About = () => {
  return (
    <div className="Div2About">
      <div className="About-Div">
        <p className="About-P">
        My names are Chinonso Anselem Ogbennia. I'm a professionally trained full stack software engineer with vast knowledge of current technological wares in use.

        I possess full commitment towards my skills and looking to add more skills.

        Aside my work life I am outgoing and enjoy the gifts of nature.

        </p>
      </div>


            <div className="About-Footer-Div">
              <h4 className="About-Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
              <h4 className="About-Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
            </div>
    </div>
  )
}


export default About;