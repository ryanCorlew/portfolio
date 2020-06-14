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
          Indiana. For the past few years, I have been a freelance drummer while
          working in church production. I am also an avid gamer, and my vast
          love for games is what originally sparked my interest in the world of
          coding. Starting with C#, I began learning to develop games. My wife,
          Courtney, is currently a software engineer and has inspired me to also
          learn JavaScript. Since then, I have built multiple applications while
          learning the language and look forward to learning more and entering
          the technology industry.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default About;
