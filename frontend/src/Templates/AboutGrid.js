// Import Dependencies
import React from 'react';

// Import Stylings
import './AboutGrid.css';
import PageHeader from '../Organisms/PageHeader';
import PageFooter from '../Organisms/PageFooter';

// Import Components

const SKILLSET = [ 
  {
    title: 'MongoDB',
  },{
    title: 'Express.js',
  },{
    title: 'React.js',
  },{
    title: 'Node.js',
  },{
    title: 'Git',
  },{
    title: 'HTML',
  },{
    title: 'CSS',
  },{
    title: 'Javascript',
  }
];

const AboutGrid = (props) => {
  return(
    <div className='about-grid-container'>

      <PageHeader title='Header' />
      
      <div className='about-body-container'>
        <div className='bio-container'>
            <div className='self-portrait'>
              <img src='' alt='Bill Lee' />
            </div>
            <div className='bio-content'>
              <p id='bio'>
                Hi there! I'm Ming Jung Lee, you can call me Bill. I'm a passionate full stack web developer with a background in Biophysics looking to create intuitive, efficient, and user-friendly interfaces. I have recently completed a full-stack development bootcamp course and currently is looking for a position in which I can quickly absorb new information and learn new skills and apply the knowledge in real world web applications.
              </p>
            </div>
            <div className='skillset-container'>
              <div id='skill-text-container'>
                <p >A list of skills in my expertise:</p>
              </div>
              <div className='skill-list'>
                {
                  SKILLSET.map(skill => (
                    <div className='skill-item'>
                      <div className='skill-title'>{skill.title}</div>
                    </div>
                  ))
                }
              </div>
            </div>
        </div>

        <div className='habits'>
          <div className='why-habits'>
            <p>Why I got so into habits...</p>
          </div>
          <div className='check-habits'>
            <p>Checkin' in for the day...</p>
          </div>
          <div className='progress-chart'>
            <p>Calculating Improvements...</p>
          </div>

        </div>
        <div className='image-gallery'>
          <div className='image1'>
            <p>Image</p>
          </div>
          <div className='image2'>
            <p>Image</p>
          </div>
          <div className='image3'>
            <p>Image</p>
          </div>
          <div className='image4'>
            <p>Image</p>
          </div>
        </div>
      </div>

      <PageFooter title='Footer' />
    </div>
  );
}

export default AboutGrid;