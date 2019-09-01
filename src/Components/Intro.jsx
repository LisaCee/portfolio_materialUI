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
          <Grid item xs={12} sm={4} md={3} lg xl={1}>
            <img src={Logo} alt='logo' id='logo' justify='center' />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            lg
            xl={10}
            alignContent='center'
            justify='baseline'
          >
            <Typography variant='h5' component='h3' align='left' id='headline'>
              Lisa Canini
            </Typography>
            <Typography component='p' align='left' id='body'>
              Passionate full stack developer, creating websites that remove
              barriers to accessing information and make that information
              readily available to everyone.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
