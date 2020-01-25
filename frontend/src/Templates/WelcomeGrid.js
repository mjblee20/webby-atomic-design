// Import Dependencies
import React from 'react';

// Import Stylings
import './WelcomeGrid.css';

// Import Components
import LinkToButton from '../Atoms/LinkToButton';

/* Welcome Page! With Animations!*/
const WelcomeGrid = (props) => {
  return(
      <div className='welcome-grid'>

        <div className='welcome-container'>
          <LinkToButton route='/home'>Welcome!</LinkToButton>
        </div>
        
      </div>
  )
}

export default WelcomeGrid;