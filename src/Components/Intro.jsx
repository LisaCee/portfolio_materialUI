import React from 'react';
import Logo from '../images/LisaCee_Logo_blue.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../styles/intro.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function Intro() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root} id='intro'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md lg xl>
            {/* <Grid item xs={12} sm={6} md lg xl> */}
            <img src={Logo} alt='logo' id='logo' justify='center' />
            {/* </Grid> */}
          </Grid>
          <Grid item xs={12} sm={8} md lg xl>
            <Typography
              variant='h5'
              component='h3'
              align='center'
              id='headline'
            >
              Hi. I'm Lisa Cee.
            </Typography>
            <Typography component='p' align='left' id='body'>
              I am a full stack developer passionate about creating websites
              that remove barriers to accessing information and make that
              information readily available to everyone. I am experienced with
              HTML/CSS/JavaScript, React, MongoDB, Node and more after
              completing an intensive 13-month mastery-based program at{' '}
              <a href='https://lambdaschool.com/' target='_'>
                Lambda School.
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
