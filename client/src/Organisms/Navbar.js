// Import Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Import Stylings
import './NavBar.css';

// Import Components
import NavBrand from '../Atoms/NavBrand';

const Navbar = (props) => {
  return(
    <div className='navbar'>

      {/* My Webpage's Brand */}
      <NavBrand />

      {/* My ways to navigate around my webpages */}
      <NavLinkGroup />

    </div>
  )
}

export default Navbar;
