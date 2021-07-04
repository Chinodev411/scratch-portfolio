import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigateMenu = () => {
  return (
    <div className="NavigateDiv">
      <ul className="NavUl">

        <li className="NavLi">
          <NavLink to="/" className="NavText">Home</NavLink>
        </li>

        <li className="NavLi">
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li className="NavLi">
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li className="NavLi">
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li className="NavLi">
          <NavLink to="/about">About</NavLink>
        </li>

      </ul>
    </div>
    
  );
}





export default NavigateMenu;