import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import todo from "../../assets/todo.png";
import recipe from "../../assets/recipe.png";
import food from "../../assets/food.png";
import destiny from "../../assets/destiny.png";
import me from "../../assets/me.JPG";

import styles from "./Project.module.css";

const useStyles = makeStyles({
  root: {
    width: 300,
    minWidth: 300,
    height: 300,
    margin: "2.5rem 5rem",
    "& img": {
      width: "300px",
      height: "300px",
      objectFit: "cover",
    },
  },
});

const Project = (props) => {
  const classes = useStyles();

  let image;

  switch (props.image) {
    case "todo":
      image = todo;
      break;
    case "recipe":
      image = recipe;
      break;
    case "food":
      image = food;
      break;
    case "destiny":
      image = destiny;
      break;
    case "me":
      image = me;
      break;
    default:
      image = todo;
  }

  return (
    <Card className={classes.root} raised key={props.key}>
      <div className={styles.container}>
        <img src={image} alt="pic" />
        <div className={styles.overlay} />
        <div className={styles.info}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className={styles.buttonContainer}>
            {props.demo && (
              <a href={props.demo} target="_blank">
                Demo
              </a>
            )}
            <a href={props.github} target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Project;
