import React from 'react';
import Logo from '../images/LisaCee_Logo_blue.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
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
        <Grid container spacing={3} justify='center' alignContent='center'>
          <Grid item xs={12} sm={4} md={3}>
            <img src={Logo} alt='logo' id='logo' />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography component='h6' variant='h4' align='left' id='headline'>
              Lisa Canini
            </Typography>
            <Typography variant='h6' align='left' id='introSkills'>
              Problem Solver | Empathetic | Active Learner{' '}
            </Typography>
            <Typography component='p' align='left' id='body'>
              Passionate full stack developer, creating websites that remove
              barriers to access and make information available to everyone.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Divider className='dividerMargin' />
    </div>
  );
}
