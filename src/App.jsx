import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavDrawer from './Components/NavDrawer';
import Intro from './Components/Intro';
import BookFinder from './Components/BookFinder';
import MovieTM from './Components/MovieTM';
import KnowledgeRocket from './Components/KnowledgeRocket';
import LambdaNotes from './Components/LambdaNotes';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <NavDrawer />
      <Intro />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg xl>
          <MovieTM />
        </Grid>
        <Grid item xs={12} sm={6} lg xl>
          <BookFinder />
        </Grid>
        <Grid item xs={12} sm={6} lg xl>
          <KnowledgeRocket />
        </Grid>
        <Grid item xs={12} sm={6} lg xl>
          <LambdaNotes />
        </Grid>
      </Grid>

      <Skills />
      <Contact />
    </div>
  );
}

export default App;
