import React from 'react';
import '../App.css';
import { BiCopyright } from "react-icons/bi";



const Skills = () => {
  return (
    <div className="Div2Skills">
      <div className="Skills-Container">
        <div className="List-Title">
            <h4 className="List-Head">List Of Technology Skills</h4>
        </div>
        <div className="List-Skills">
            <ul className="Ul-Skills">
              <li className="Li-Skills"><h4 className="Li-Skills-Text">HTML5</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">CSS3</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Javascript</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">React</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Github Version Control</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Restful Api</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Fundamental Algorithms</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Bootstrap</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Linux & Windows Navigation</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Troubleshooting</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Responsive New Learning</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Work Environment Adaptation</h4></li>
              <li className="Li-Skills"><h4 className="Li-Skills-Text">Azure Devops Fundamental</h4></li>
            </ul>

          </div>

          {/* Using Pro-Footer-Div Here With Same CSS Properties */}
          
          <div className="Pro-Footer-Div">
              <h4 className="Pro-Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
              <h4 className="Pro-Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
            </div>

      </div>
    </div>
    
  )
}



export default Skills;