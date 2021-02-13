import { Container, Grid, Paper, Link } from '@material-ui/core';
import React from 'react';
import Project from './Project';

export default function Portfolio() {
    return (
        <Container>
            <Paper>
                <h1>Portfolio</h1>
                <Link href="./assets/Resume.pdf">Download Resume</Link>
                <Grid container justify="center">
                    {
                        projects.map(project => {
                            return (
                                
                                <Grid item xs={12} sm={6} md={4}>
                                    <Project project={project}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Paper>
        </Container>
    );
};

let projects = [
    {
        title: "Total Tech Blog",
        image: "./assets/total-tech-blog.png",
        imageAlt: "Tech Blog Screenshot",
        demoUrl: "https://total-tech-blog.herokuapp.com/",
        githubUrl: "https://github.com/HeavensRegent/nb-w14-homework"
    },
    {
        title: "Project 1: Big Brain Trivia",
        image: "./assets/TriviaGame.png",
        imageAlt: "Trivia Game Screenshot",
        demoUrl: "https://heavensregent.github.io/project1/",
        githubUrl: "https://github.com/HeavensRegent/project1"
    },
    {
        title: "Project 2: Reserve a Room",
        image: "./assets/reserve-a-room.png",
        imageAlt: "Reserve A Room Screenshot",
        demoUrl: "https://reserve-a-room.herokuapp.com/",
        githubUrl: "https://github.com/HeavensRegent/reserve-a-room"
    },
    {
        title: "Employee Directory",
        image: "./assets/employee-directory.png",
        imageAlt: "Employee Directory Screenshot",
        demoUrl: "https://heavensregent.github.io/nb-w19-homework-error/",
        githubUrl: "https://github.com/HeavensRegent/nb-w19-homework-error"
    },
    {
        title: "Offline Budget Tracker",
        image: "./assets/budget-tracker.png",
        imageAlt: "Budget Tracker Screenshot",
        demoUrl: "https://your-offline-budget-tracker.herokuapp.com/",
        githubUrl: "https://github.com/HeavensRegent/nb-w18-homework"
    },
    {
        title: "Fitness Tracker",
        image: "./assets/fitness-tracker.png",
        imageAlt: "Fitness Tracker Screenshot",
        demoUrl: "https://workout-tracker-uofu.herokuapp.com/",
        githubUrl: "https://github.com/HeavensRegent/nb-w17-homework"
    },
];