import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavDrawer from './Components/NavDrawer';
import Intro from './Components/Intro';
import Gallery from './Components/Gallery';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <NavDrawer />
      <Intro />
      <Skills />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
