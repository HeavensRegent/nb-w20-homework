import { BottomNavigation, makeStyles, Container } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
        background: 'rgba(255, 255, 255, 0.3),'
    },
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <Container>
            <BottomNavigation className={classes.footer}>
                <p>Copyright 2021</p>
            </BottomNavigation>
        </Container>
    );
}