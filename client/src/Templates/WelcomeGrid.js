// Import Dependencies
import React from 'react';

// Import Styles
import './WelcomeGrid.css';

// Import Components
import LinkToButton from '../Atoms/LinkToButton';

{/* Welcome Page! With Animations!*/}
const WelcomeGrid = (props) => {
  return(
    <div className='home-grid'>
      
      <div className='welcome-container'>
        <LinkToButton>Welcome!</LinkToButton>
      </div>

    </div>
  )
}

export default WelcomeGrid;