import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import styles from "./About.module.css";
import Contact from "../Contact/Contact";
import me from "../../assets/me.JPG";

const useStyles = makeStyles({
  root: {
    width: 300,
    minWidth: 300,
    height: 300,
    marginRight: "5rem",
    "& img": {
      width: "300px",
      height: "300px",
      objectFit: "cover",
    },
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div className={styles.container} id="about">
      <header className={styles.header}>
        <h1>About Me</h1>
      </header>
      <div className={styles.content}>
        <Card className={classes.root}>
          <img src={me} alt="picture of me" />
        </Card>
        <p>
          Hi! I'm Ryan, a self-taught software engineer living in Indianapolis,
          Indiana. For the past few years, I have been a freelance drummer and
          worked in church production. When I wasn't working, I played video
          games and that's what originally sparked my interest into the world of
          coding. Starting with C#, I started to learn and develop games. My
          wife is also a software engineer and she suggested I learn JavaScript.
          Since then, I've build multiple applications and look forward to
          learning more and entering the technology industry.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default About;
