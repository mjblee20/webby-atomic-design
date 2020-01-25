// Import Dependencies
import React from 'react';

// Import Stylings
import './AboutGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';

// Import Components



const AboutGrid = (props) => {
  return(
    <div className='about-grid-container'>

      <PageHeader title='Header' />
      
      <div className='body'></div>
      
      {/* TODO: Eventually it's own js file */}

      <PageFooter title='Footer' />
    </div>
  );
}

export default AboutGrid;