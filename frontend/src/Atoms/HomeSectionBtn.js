import React from 'react';

import './HomeSectionBtn.css';
import LiftLinkToButton from './LiftLinkToButton';

const HomeSectionBtn = (props) => {
  return(
    <LiftLinkToButton 
      className='home-section-btn' 
      route={props.route}
    >
      {props.title}
    </LiftLinkToButton>
  );
}

export default HomeSectionBtn;
