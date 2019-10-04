import React from 'react';
// import Logo from '../src/images/LisaCee_Logo_blue.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import '../src/styles/intro.css';

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
            {/* <img src={Logo} alt='logo' id='logo' /> */}
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
      <style jsx>{`
        #intro {
          height: auto;
          margin-bottom: 12px;
          background: #ffffff;
          max-width: 345px;
        }

        #intro p {
          line-height: 1.5rem;
          margin-top: 3%;
        }

        img#logo {
          width: 40%;
          margin-left: 29%;
        }

        #headline {
          margin-bottom: 5%;
          color: #007388;
        }

        #introSkills {
          color: #007388;
          font-size: 1rem;
        }

        .dividerMargin {
          margin: 35px 0 !important;
        }

        @media (min-width: 600px) {
          #intro {
            max-width: 96%;
          }
          #headline {
            margin-top: 2%;
          }
          img#logo {
            width: 90%;
            margin-left: 8%;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
        }

        @media (min-width: 768px) {
          #intro {
            max-width: 99%;
          }
        }

        @media (min-width: 992px) {
          #intro {
            max-width: 100%;
          }
          img#logo {
            width: 60%;
            max-width: 250px;
            margin-left: 20%;
            margin-top: 5%;
          }
          #headline {
            margin-bottom: 2%;
          }
        }

        @media (min-width: 1200px) {
          #intro {
            margin: 3% auto;
            max-width: 1100px;
          }
          img#logo {
            width: 70%;
            max-width: 250px;
            margin-left: 30%;
            margin-top: 2%;
          }
          #headline {
            margin-top: 1rem;
            margin-bottom: 2%;
            font-size: 2rem;
          }
          #body {
            line-height: 2.5rem;
            font-size: 1.25rem;
          }
        }
        /*# sourceMappingURL=intro.css.map */
      `}</style>
    </div>
  );
}
