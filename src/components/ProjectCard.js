import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    maxWidth: "95%",
    border: 2,
    marginBottom: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  chip: {
    marginRight: 10
  },
  icon: {
    verticalAlign: "middle"
  },
  labelIcon: {
    verticalAlign: "middle",
    marginRight: 15
  }
});

const ProjectCard = props => {
  const classes = useStyles();

  return (
    //TODO define handlers
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="subtitle1" component="h1">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.pos}>
          {props.description}
        </Typography>
        <Typography variant="body2">
          <PeopleIcon className={classes.labelIcon} />
          {props.contributers} contributers
        </Typography>
        <LabelOutlinedIcon className={classes.labelIcon} />
        {props.techStack.map(tech => (
          <Chip
            variant="outlined"
            size="small"
            label={tech}
            className={classes.chip}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
