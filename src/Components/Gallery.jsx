import React from 'react';
import Grid from '@material-ui/core/Grid';

import BookFinder from './BookFinder';
import MovieTM from './MovieTM';
import KnowledgeRocket from './KnowledgeRocket';
import LambdaNotes from './LambdaNotes';

export default function Gallery() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <MovieTM />
      </Grid>
      <Grid item xs={12} sm={6}>
        <BookFinder />
      </Grid>
      <Grid item xs={12} sm={6}>
        <KnowledgeRocket />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LambdaNotes />
      </Grid>
    </Grid>
  );
}
