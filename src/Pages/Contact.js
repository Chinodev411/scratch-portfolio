import React from 'react'
import '../App.css';
import { BiCopyright } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="Div2Contact">
      <div className="Contact-Div">
        <h4>My Email address : Chinodev@outlook.com
              <br/> Github: Chinodev411
              </h4>
      </div>


      <div className="Pro-Footer-Div">
              <h4 className="Pro-Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
              <h4 className="Pro-Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
            </div>
    </div>
    
  )
}


export default Contact;