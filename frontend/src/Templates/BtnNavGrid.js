
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import NavIconBtn from '../Atoms/NavIconBtn';
import './BtnNavGrid.css';

const BtnNavGrid = (props) => {
  const [isToggled, setToggle] = useState(false);
  const [isHovered, setHover] = useState(false);

  /**
   * When nav-icon is clicked trigger this
   * When mouseLeave sidebar trigger this
   * When mouseEnter nav-icon is hovered
   */
  const toggleHandler = () => {
    setToggle(!isToggled);
    document.getElementById('sidebar').classList.toggle('is-in');
  };

  return (
    <React.Fragment>
      <div className='nav-btn-group'>

      </div>
      <div className='nav-icon-container'>
        <div className='nav-icon' onClick={toggleHandler} onMouseEnter={toggleHandler}>
          <NavIconBtn>&#9776;</NavIconBtn>
        </div>
        <div className="page-title">
          <h1>
            Title
          </h1>
        </div>
      </div>

      {/* Sidebar option */}
      <div className='sidebar-container' id='sidebar' onMouseLeave={toggleHandler}>
        <nav className='side-nav'>
          <ul className='nav-links'>
            <li>
              <NavLink className='side-nav-links' exact to='/'>
                <span>
                  Welcome
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/home'>
                <span>
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/about'>
                <span>
                  About
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/contact'>
                <span>
                  Contact
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className='side-nav-links' to='/blog'>
                <span>
                  Blog
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      

      {/* Dropdown list option */}
      
      
    </React.Fragment>
  );
}

export default BtnNavGrid;
