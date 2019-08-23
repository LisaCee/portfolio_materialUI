import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

function HideOnScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
    <Slide appear={false} direction="down" in={!trigger}>
    {children}
    </Slide>
    );
}

export default function NavBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
            <AppBar>
                <Toolbar>
            
                    <Typography variant='h6' >
                        Lisa Canini
                    </Typography>
                    <Typography variant='h6' >
                        Full Stack Web Developer
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText>About</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Contact</ListItemText>
                        </ListItem>
                    </List>
                    </Toolbar>
                    </AppBar>
            </HideOnScroll>
                    
                
            
        </div>
    )
}
