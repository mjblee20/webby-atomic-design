import React from 'react';

import './NavIconBtn.css';

const NavIconBtn = (props) => {
  return(
    <button className='nav-icon-btn'>
      {props.children}
    </button>
  )
}

export default NavIconBtn;