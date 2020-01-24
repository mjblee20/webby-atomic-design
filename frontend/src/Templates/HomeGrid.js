// Import Dependencies
import React from 'react';

// Import Stylings
import './HomeGrid.css';
import PageHeader from '../Organisms/PageHeader';
import HomeSections from '../Organisms/HomeSections';

// Import Components



const HomeGrid = (props) => {
  return(
    <div className='home-grid-container'>

      <PageHeader
        title='Home'
      />
      
      <HomeSections />
      
      {/* TODO: Eventually it's own js file */}
      <div className='footer-container'>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default HomeGrid;
