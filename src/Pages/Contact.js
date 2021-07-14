import React from 'react'
import '../App.css';
import { BiCopyright } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="Div2Contact">
      <div className="Contact-Div">
        <h4 className="Contact-Info">My Email Address : Chinodev@outlook.com
              <br/> Github: Chinodev411
              </h4>
      </div>


          <div className="Contact-Footer-Div">
              <h4 className="Contact-Footer-Text"><BiCopyright className="Copy-Right"/>Copyright 2021 </h4> 
              <h4 className="Contact-Footer-Text-2">All rights reserved. Created By ChinoTheRobot </h4>
            </div>
    </div>
    
  )
}


export default Contact;