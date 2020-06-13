import React from "react";
import classes from "./Section.module.css";

const Section = (props) => {
  return (
    <div className={classes.container}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default Section;
