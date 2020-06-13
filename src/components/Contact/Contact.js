import React from "react";
import classes from "./Contact.module.css";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contact = () => {
  return (
    <div className={classes.container} id="contact">
      <header className={classes.header}>
        <h1>Contact</h1>
      </header>
      <h5>Send me an email! </h5>
      <h4>
        <a href="mailto:ryancorlew13@gmail.com?subject=Hey, Ryan!">
          ryancorlew13@gmail.com
        </a>
      </h4>
      <div className={classes.socialButtons}>
        <IconButton href="https://github.com/ryanCorlew" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/ryancorlew/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://twitter.com/Wellrock12" target="_blank">
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/wellrock12/"
          target="_blank"
        >
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
