import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
      width: '100%'
  }
});

export default function Project({project: {title, image, imageAlt, demoUrl, githubUrl}, ...props}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <img className={classes.image} src={image} alt={imageAlt}/>
      </CardContent>
      <CardActions>
        <Button size="small" href={demoUrl} target="_blank">Live Demo</Button>
        <Button size="small" href={githubUrl} target="_blank">Github URL</Button>
      </CardActions>
    </Card>
  );
}