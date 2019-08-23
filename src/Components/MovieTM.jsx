import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import MovieTMIMG from '../images/movieTimeMachine.gif';

import '../styles/card.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 240
  }
}));

export default function BookFinder() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title='Movie Time Machine' />

      <CardMedia
        className={classes.media}
        image={MovieTMIMG}
        title='Movie Time Machine'
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          A time machine app that returns movies from The Movie DB API given a
          search year.
        </Typography>
        <div className='details'>
          <i className='fab fa-react fa-lg' />
          <i className='fab fa-css3 fa-lg' />
          <i className='fab fa-bootstrap fa-lg' />
          <i className='fab fa-github fa-lg' />
        </div>
      </CardContent>

      <CardActions>
        <Button size='small' color='primary'>
          <a
            href='https://movie-time-machine.netlify.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Visit
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}
