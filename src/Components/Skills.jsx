import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import '../styles/skills.css';

export default function Skills() {
  return (
    <Container>
      <div id='skills'>
        <div>
          <Typography variant='h5'>Skills</Typography>
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
            <li className='fas fa-laptop-code'>
              <span className='icon'>Jest</span>
            </li>
            <li className='fab fa-bootstrap'>
              <span className='icon'>Frameworks</span>
            </li>
            <li className='fas fa-users'>
              <span className='icon'>Works well solo or with a team</span>
            </li>
            <li className='fas fa-code'>
              <span className='icon'>HTML & CSS</span>
            </li>
            <li className='fab fa-sass'>
              <span className='icon'>Sass</span>
            </li>
            <li className='fab fa-js-square'>
              <span className='icon'>JavaScript</span>
            </li>
            <li className='fas fa-music'>
              <span className='icon'>Prince fan</span>
            </li>
            <li className='fab fa-python'>
              <span className='icon'>Python</span>
            </li>
            <li className='fab fa-node-js'>
              <span className='icon'>Node.js</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
