import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import BookFinderIMG from '../images/book-finder.gif';

import '../styles/card.css';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    padding: theme.spacing(2),
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
      <CardHeader title='Book Finder' />

      <CardMedia
        className={classes.media}
        image={BookFinderIMG}
        title='Book Finder'
      />

      <CardContent>
        <Typography component='p'>
          A book searching app created using the Google Books API
        </Typography>
        <br />
        <div className='details'>
          <i className='fab fa-react fa-lg' title='react' />
          <i className='fab fa-css3 fa-lg' title='css3' />
          <i className='fab fa-bootstrap fa-lg' title='bootstrap' />
          <i className='fab fa-google fa-lg' title='google books api' />
          <i className='fab fa-github fa-lg' title='github' />
        </div>
      </CardContent>

      <CardActions>
        <Button size='small'>
          <a
            href='https://lisacee-book-finder.netlify.com/'
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
