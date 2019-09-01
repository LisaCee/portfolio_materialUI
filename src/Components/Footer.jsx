import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div>
      <div id='social'>
        <ul>
          <a
            href='https://www.github.com/lisacee'
            target='_'
            rel='noopener noreferrer'
          >
            <li className='fab fa-github'>
              <span className='icon'>Github</span>
            </li>
          </a>
          <a
            href='https://www.linkedin.com/in/lisacee'
            target='_'
            rel='noopener noreferrer'
          >
            <li className='fab fa-linkedin-in'>
              <span className='icon'>LinkedIn</span>
            </li>
          </a>
          <a
            href='https://www.twitter.com/lisacee14'
            target='_'
            rel='noopener noreferrer'
          >
            <li className='fab fa-twitter'>
              <span className='icon'>Twitter</span>
            </li>
          </a>
          <a href='mailto:lisaceedesign@gmail.com?Subject=Hello'>
            <li className='fas fa-envelope' title='lisaceedesign@gmail.com'>
              <span className='icon'>Mail</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
