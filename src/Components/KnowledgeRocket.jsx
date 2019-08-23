import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import KnowledgeRocketIMG from '../images/knowledge-rocket.gif';

import '../styles/card.css';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 240
  }
});

export default function KnowledgeRocket() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title='Knowledge Rocket' />

      <CardMedia
        className={classes.media}
        image={KnowledgeRocketIMG}
        title='Knowledge Rocket'
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          A full stack web application for educators created with a small team.
        </Typography>
        <div className='details'>
          <i className='fab fa-react fa-lg' />
          <i className='fab fa-css3 fa-lg' />
          <i className='fab fa-bootstrap fa-lg' />
          <i className='fab fa-github fa-lg' />
          <i className='fab fa-python fa-lg' />
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
