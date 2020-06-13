import React from "react";
import classes from "./Header.module.css";
import NavLinks from "./NavLinks/NavLinks";

const Header = (props) => {
  return (
    <header className={classes.header} id="projects">
      <h2>Ryan Corlew</h2>
      <NavLinks clicked={(e) => props.clicked(e)} />
    </header>
  );
};

export default Header;
