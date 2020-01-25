// Import Dependencies
import React from 'react';

// Import Stylings
import './PortfolioGrid.css';
import PageHeader from '../Organisms/PageHeader';
import HomeSections from '../Organisms/HomeSections';
import PageFooter from '../Organisms/PageFooter';

// Import Components



const PortfolioGrid = (props) => {
  return(
    <div className='portfolio-grid-container'>

      <PageHeader title='Portfolio' />
      
      {/* TODO: Eventually it's own js file */}
      <div className='portfolio-body'></div>
      

      <PageFooter title='Footer' />
    </div>
  );
}

export default PortfolioGrid;