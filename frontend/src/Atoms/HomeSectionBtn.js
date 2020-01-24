import React from 'react';

import { NavLink } from 'react-router-dom';

import './HomeSectionBtn.css';

const HomeSectionBtn = (props) => {
  return(
    <NavLink className='home-section-btn' to={props.route}>{props.title}</NavLink>
  );
}

export default HomeSectionBtn;
