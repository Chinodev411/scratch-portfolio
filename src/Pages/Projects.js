import React from 'react';
import '../App.css';
import project1 from '../Images/project1.jpg';
import project2 from '../Images/project2.jpg';
import { BiCopyright } from "react-icons/bi";


const Projects = () => {
  return (
    <div className="Div2Projects">
      <div className="Portfolio-Div">
            <div className="Portfolio-1">
              <div className="Port-Title-1">
                  <h4 className="Port-Text-1">MixOrMatch</h4>
              </div>
              <div className="Portfolio-Image-1">
                <img src={project1} alt="MixOrMatch" className="Pro-1" />

              </div>

              <div className="Click-Portfolio-1">
              <td onClick={()=> window.open("https://chinodev411.github.io/mixormatch/", "_blank")} target="_blank"><h4 className="Click-Text-1">Click To View Project On Web</h4></td>
              </div>
            
            </div>
            <div className="Portfolio-2">
              <div className="Port-Title-2">
                    <h4 className="Port-Text-2">Trivia Alpha Search</h4>
                </div>
                <div className="Portfolio-Image-2">
                  <img src={project2} alt="Trivia" className="Pro-2" />
                </div>

                <div className="Click-Portfolio-1">

                <td onClick={()=> window.open("https://trivia-alpha-search.netlify.app/", "_blank")} target="_blank"><h4 className="Click-Text-2">Click To View Project On Web</h4></td>
                
                </div>
  
            </div>
            <div className="Pro-Footer-Div">
        
              <h4 className="Pro-Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
              <h4 className="Pro-Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
            </div>
      </div>
   
        

          
    </div>
    
  )
}

export default Projects;