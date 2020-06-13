import React from "react";
import classes from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <div className={classes.links}>
      <button
        onClick={(e) => props.clicked(e.target.name)}
        className={classes.link}
        name="projects"
      >
        Projects
      </button>
      <button
        onClick={(e) => props.clicked(e.target.name)}
        className={classes.link}
        name="about"
      >
        About
      </button>
      <button
        onClick={(e) => props.clicked(e.target.name)}
        className={classes.link}
        name="contact"
      >
        Contact
      </button>
    </div>
  );
};
export default NavLinks;
