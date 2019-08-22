import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} aria-label='menu'>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' >
                        Lisa Canini
                    </Typography>
                    <Typography variant='p' >
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
        </div>
    )
}
