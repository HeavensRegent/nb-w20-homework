import React from 'react';
import { Container, Paper } from '@material-ui/core';

export default function Contact() {
    return (
        <Container>
            <Paper>
                <h1 className="card-title">Contact</h1>
                <hr />
                <p className="card-text"><b>Name:</b> Nathan Bailey</p>
                <p className="card-text"><b>Email:</b> blstarwars@live.com</p>
                <p className="card-text"><b>Phone Number:</b> 801-318-2790</p>
            </Paper>
        </Container>
    );
};