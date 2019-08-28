import React from 'react';
import Logo from '../images/Logo_Blue_sm.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
        <img src={Logo} alt='logo' id='logo' />

        <Typography variant='h5' component='h3'>
          Hi. I'm Lisa Cee.
        </Typography>
        <Typography component='p'>
          I am a full stack developer passionate about creating websites that
          remove barriers to accessing information and make that information
          readily available to everyone. I am experienced with
          HTML/CSS/JavaScript, React, MongoDB, Node and more after completing an
          intensive 13-month mastery-based program at Lambda School.
        </Typography>
      </Paper>
    </div>
  );
}
