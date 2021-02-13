import React from 'react';
import { Typography, Toolbar, AppBar, List, ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#fff',
    },
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
    },
  }));

export default function Header() {
    const classes = useStyles();

    return (
      <AppBar position="static">
      <Toolbar>
        <List className={classes.flexContainer}>
          <ListItem>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/" className={classes.title}>Home</NavLink>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/about" className={classes.title}>About</NavLink>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/contact" className={classes.title}>Contact</NavLink>
            </Typography>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
    );
};