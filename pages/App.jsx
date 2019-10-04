import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavDrawer from './NavDrawer';
import Intro from './Intro';
import Gallery from './Gallery';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

import '../src/App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      {/* <NavDrawer /> */}
      <Intro />
      {/* <Skills />
      <Gallery /> */}
      <Contact />
      {/*<Footer /> */}
    </div>
  );
}

export default App;
