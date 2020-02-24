import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LambdaNotesIMG from '../images/lambda-notes.gif';

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
      <a href='https://github.com/LisaCee/front-end-project-week' target='_'>
        <CardHeader title='Lambda Notes' />

        <CardMedia
          className={classes.media}
          image={LambdaNotesIMG}
          title='Lambda Notes'
        />
      </a>
      <CardContent>
        <Typography color='textSecondary' component='p'>
          A full stack note taking app with persistent storage
        </Typography>
        <br />
        <div className='details'>
          <i className='fab fa-react fa-lg' title='react' />
          <i className='fab fa-less fa-lg' title='less' />
          <i className='fab fa-bootstrap fa-lg' title='bootstrap' />
          <i className='fab fa-github fa-lg' title='github' />
          <i className='fab fa-python fa-lg' title='python' />
        </div>
      </CardContent>

      <CardActions>
        <Button size='small' color='primary'>
          <a
            href='https://infallible-euler-24eb8a.netlify.com/'
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
