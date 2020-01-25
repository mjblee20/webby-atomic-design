import React from 'react';

import HomeSectionChoice from './../Compounds/HomeSectionChoice';
import './HomeSections.css';

const SECTIONS = [
  {
    title: 'ABOUT',
    route: '/about',
    color: 'var(--darkpurple)'
  },
  {
    title: 'PORTFOLIO',
    route: '/portfolio',
    color: 'var(--orangered)'
  },
  {
    title: 'STYLES',
    route: '/styles',
    color: 'var(--teal)'
  },
  {
    title: 'BLOG',
    route: '/blog',
    color: 'var(--yellow)'
  },
  {
    title: 'CONTACT',
    route: '/contact',
    color: 'var(--lightergray)'
  }
]

const HomeSections = (props) => {
  return (
    <div className='home-content-container'>
      {SECTIONS.map(section => (
        <HomeSectionChoice title={section.title} route={section.route} color={section.color}/>
      ))}
    </div>
  )
}

export default HomeSections;
