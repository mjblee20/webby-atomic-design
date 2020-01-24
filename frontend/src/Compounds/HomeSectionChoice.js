// Import Dependencies
import React from 'react';

// Import Stylings
import './HomeSectionChoice.css';

// Import Components
import HomeSectionBtn from '../Atoms/HomeSectionBtn';

const HomeSectionChoice = (props) => {
  return(
    <div className='section-choice-container' style={{ background: `${props.color}`}}>
      <HomeSectionBtn title={props.title} route={props.route} />
    </div>
  )
}

export default HomeSectionChoice;
