import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import BookFinder from './BookFinder';
import MovieTM from './MovieTM';
import KnowledgeRocket from './KnowledgeRocket';
import LambdaNotes from './LambdaNotes';

export default function Gallery() {
  return (
    <div>
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
      <Divider className='dividerMargin' />
    </div>
  );
}
