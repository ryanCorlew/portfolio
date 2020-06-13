import React from "react";

import Project from "./Project";
import classes from "./ProjectList.module.css";

const projects = [
  {
    image: "todo",
    title: "ToDo App",
    description:
      "ToDo crud app featuring drag and drop using React Beautiful Dnd",
    github: "https://github.com/ryanCorlew/Todo-dnd",
    demo: "https://ryancorlew.github.io/Todo-dnd/",
  },
  {
    image: "recipe",
    title: "Recipe Finder",
    description: "Simple recipe search app using the Spoonacular API",
    github: "https://github.com/ryanCorlew/recipe-search-api",
    demo: "https://ryancorlew.github.io/recipe-search-api/",
  },
  {
    image: "destiny",
    title: "Discover Destiny",
    description:
      "A simple item search app for the video game 'Destiny' using the bungie.net API. Try searching one of these Destiny weapons - (recluse, hard light)",
    github: "https://github.com/ryanCorlew/discover-destiny",
    demo: "https://ryancorlew.github.io/discover-destiny/",
  },
  {
    image: "food",
    title: "What's Cookin'?",
    description:
      "This is a 'work in progress' app allowing users to maintain a list of their food inventory and track recipes that they have the ingredients to cook",
    github: "https://github.com/ryanCorlew/whats-cookin",
  },
];
const ProjectList = () => (
  <div className={classes.container}>
    <header className={classes.header}>
      <h1>Projects</h1>
    </header>
    <div className={classes.content}>
      {projects.map((project, i) => (
        <React.Fragment key={i}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default ProjectList;
