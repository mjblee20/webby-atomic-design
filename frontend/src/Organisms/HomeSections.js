import React from 'react';

import HomeSectionChoice from './../Compounds/HomeSectionChoice';
import './HomeSections.css';

const SECTIONS = [
  {
    title: 'ABOUT',
    route: '/about',
    color: '#FE4A49'
  },
  {
    title: 'PORTFOLIO',
    route: '/portfolio',
    color: '#FFBA49'
  },
  {
    title: 'CONTACT',
    route: '/contact',
    color: '#20A39E'
  },
  {
    title: 'BLOG',
    route: '/blog',
    color: '#073B3A'
  },
  {
    title: 'HOMEPAGE STYLES',
    route: '/styles',
    color: '#0081AF'
  }
]

const HomeSections = (props) => {
  return (
    <div>
      {SECTIONS.map(section => (
        <HomeSectionChoice title={section.title} route={section.route} color={section.color} />
      ))}
    </div>
  )
}

export default HomeSections;
