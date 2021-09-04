import React from 'react';
import Logo from '../images/avatar350.jpg';
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
            <img src={Logo} alt='A white woman with short, brown hair and glasses looking to her left' id='logo' />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Typography component='h1' variant='h1' align='left' id='headline'>
              Lisa Canini
            </Typography>
            <Typography variant='body1' align='left' id='introSkills'>
              Adaptive | Inquisitive | Compassionate{' '}
            </Typography>
            <Typography variant='body1' align='left' id='body'>
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
