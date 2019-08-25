import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NavBar from './Components/NavBar';
import BookFinder from './Components/BookFinder';
import MovieTM from './Components/MovieTM';
import Contact from './Components/Contact';
import KnowledgeRocket from './Components/KnowledgeRocket';
import LambdaNotes from './Components/LambdaNotes';
import About from './Components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <NavBar />
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

      <About />
      <Contact />
    </div>
  );
}

export default App;
