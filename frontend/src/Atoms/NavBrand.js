import React from 'react';
import { Link } from 'react-router-dom'


const NavBrand = (props) => {
  return <Link id='NavBrand' href>{props.children}</Link>
}

export default NavBrand;
