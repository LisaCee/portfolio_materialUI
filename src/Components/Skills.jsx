import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../styles/skills.css';

export default function Skills() {
  return (
    <div>
      <div id='skills'>
        <Divider className='dividerMargin' />
        <div>
          <Typography variant='h5' id='contact'>
            Skills
          </Typography>
          <Typography variant='body1'>
            Lisa is a valuable member of any team. She has great curiosity and
            the resolve to find solutions. While her focus is in front end
            development, Lisa has a full stack education in order to better
            understand what makes a site work and how she can make it better.
          </Typography>
          <ul className='iconSkills'>
            <li className='fab fa-react'>
              <span className='icon'>React</span>
            </li>
            <li className='fas fa-users'>
              <span className='icon'>Works well solo or with a team</span>
            </li>
            <li className='fas fa-code'>
              <span className='icon'>HTML & CSS</span>
            </li>
            <li className='fab fa-google'>
              <span className='icon'>Excellent Google-fu</span>
            </li>
            <li className='fab fa-js-square'>
              <span className='icon'>JavaScript</span>
            </li>
            <li className='fas fa-music'>
              <span className='icon'>Prince fan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
