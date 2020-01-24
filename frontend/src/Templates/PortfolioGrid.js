import React from 'react';

import './PortfolioGrid.css';
import PageHeader from '../Organisms/PageHeader';

const PortfolioGrid = (props) => {
  return(
    <div className='portfolio-grid'>
      <PageHeader 
        title='Portfolio'
      />
    </div>
  )
}

export default PortfolioGrid;
