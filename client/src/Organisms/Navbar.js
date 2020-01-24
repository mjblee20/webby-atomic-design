import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import NavBrand from '../Atoms/NavBrand';

const Navbar = (props) => {
  return(
    <div className='navbar'>
      <NavBrand />

      <NavLinkGroup />
    </div>
  )
}

export default Navbar;
