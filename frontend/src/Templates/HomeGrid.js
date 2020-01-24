// Import Dependencies
import React from 'react';

// Import Stylings
import './HomeGrid.css';

// Import Components



const HomeGrid = (props) => {
  return(
    <div className='home-grid-container'>

      {/* TODO: Eventually it's own js file */}
      <div className='header-container'>
        <h1>Header: Center Height Responsive</h1>
        {/* TODO: page position progress bar */}
        <div className='position-progress-bar'>
          
        </div>
      </div>
      
      {/* TODO: Eventually it's own js file */}
      <div className='home-content-container'>
        <h1>Body</h1>
      </div>

      {/* TODO: Eventually it's own js file */}
      <div className='footer-container'>
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default HomeGrid;
