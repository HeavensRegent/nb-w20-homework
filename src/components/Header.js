import React from 'react';
import { Typography, Toolbar, AppBar, List, ListItem, Link } from '@material-ui/core';
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
              <Link href="/" className={classes.title}>Home</Link>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6" className={classes.title}>
              <Link href="/about" className={classes.title}>About</Link>
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6" className={classes.title}>
              <Link href="/contact" className={classes.title}>Contact</Link>
            </Typography>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
    );
};