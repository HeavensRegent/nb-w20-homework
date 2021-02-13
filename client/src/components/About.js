import React from 'react';
import { Container, List, ListItem, Paper, Link, makeStyles, Typography, ListItemText } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    image: {
        flex: 1,
        float: 'left',
        marginRight: '5px',
        marginBottom: '3px',
        width: '25%',
    }
  }));

export default function About() {
    const classes = useStyles();

    return (
        <Container>
            <Paper>
                <h1>About Me</h1>
                <hr />
                <p className="card-text">
                    <img src="./assets/profile.jpg" alt="Profile pic at sun-rise"
                        className={classes.image}/>
                    I am a software developer and I have been since I was little (about 8). Well, not really.
                    When I was little I remember
                    I went with my mom to work and she would be working and there was an extra computer I could
                    play on. I remember
                    seeing the Star Wars Jedi Academy on the desktop and I asked my mom if I could play it. She
                    said "... hmm... here
                    go through this Java book first." It was a pretty thick book and I remember doing the first
                    tutorial, once I had
                    installed eclipse anyways. I was doing my first tutorial and I remember it showing the
                    System.out.println(). I
                    thought it was so cool. Whatever I typed in the quotes between the parenthesis, when I ran
                    the program it would
                    print out. I remember going to my mom and saying "WOW MOM!!!! I can make the program say
                    whatever I want!!!" I was
                    so excited. Thinking back on it, it's a good thing she responded with enthusiasm, because to
                    her it was the very
                    most basic thing.
                </p>
                <p className="card-text">
                    I live in Salt Lake City and I have my whole life. Ever since I was little we would go
                    hiking up at Ensign Peak and
                    the mountains behind it. We would go with my grandma and grandpa. My profile picture was
                    taken at my grandpa's birthday 2020.
                    The person I am holding who is cropped out is my 1 year old daughter.
                </p>
                <p className="card-text">
                    Some of my favorite hobbies include 3D-printing, Game Development, Streaming Games, albeit I
                    don't stream very often.
                    But if you guys are interested here are my socials
                </p>
                <List>
                    {
                        links.map((link) => {
                            return <ListItem >
                                <Typography variant="h6" className={classes.title}>
                                    <ListItemText className={classes.title}>
                                        {`${link.item}: `}
                                        <Link href={link.url}>{link.displayText}</Link>
                                    </ListItemText>
                                </Typography>
                            </ListItem>;
                        })
                    }
                </List>
            </Paper>
        </Container>
    );
};


const links = [
    { item: "Github", url: "https://github.com/HeavensRegent", displayText: "github.com/HeavensRegent" },
    { item: "LinkedIn", url: "https://www.linkedin.com/in/nate-bailey-2794921b5/", displayText: "Nate Bailey" },
    { item: "Twitch", url: "https://www.twitch.tv/heavensregent", displayText: "twitch.tv/heavensregent" },
    { item: "Discord", url: "https://discord.gg/sgrPww", displayText: "https://discord.gg/sgrPww" },
    { item: "Instagram", url: "https://www.instagram.com/heavensregent", displayText: "https://www.instagram.com/heavensregent" },
    { item: "Twitter", url: "https://twitter.com/heavensregent", displayText: "@heavensregent" },
    { item: "Youtube", url: "https://www.youtube.com/channel/UC-aweeyvfYt4c9i_CL92J5w", displayText: "UltimateOf4" },
];