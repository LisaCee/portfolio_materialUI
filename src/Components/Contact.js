import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/contact.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
      <div id='formFields'>
           <Typography variant='h6' >
                        Contact Me
                    </Typography>
        <Typography variant = 'body'>
          Whether you wish to work with me or just want to chat about Prince or
          programming, I'd love to hear from you.
        </Typography>
    <form action='https://formspree.io/lisaceedesign@gmail.com' method='POST' className={classes.container} autoComplete="off">

      <TextField
        id="name"
        label="Name"
        name='name'
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
     <input
            type='hidden'
            name='_next'
            value='http://www.lisaceedesign.com'
          />
      <TextField
        id="email"
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
          <TextField
        id="subject"
        label="Subject"
        type="subject"
        name="subject"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />

      <TextField
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
        fullWidth
        required
      />
     <Button type='submit' className='primary submit' color='primary' variant='contained'>Submit</Button>
     <Button type='reset' value='Reset Form' color='secondary' variant='contained'>Reset</Button>

    </form>
    </div>
  );
}