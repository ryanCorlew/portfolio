import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ProjectList from "./components/ProjectsList/ProjectList";
import About from "./components/About/About";
import NavLinks from "./components/Header/NavLinks/NavLinks";
import { findByLabelText } from "@testing-library/react";

const footerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  padding: 5,
  marginTop: 5,
  height: "50px",
};

class App extends Component {
  navClickHandler = (name) => {
    const container = document.getElementById(name);
    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Header clicked={this.navClickHandler} />
        <ProjectList />
        <About />
        <footer style={footerStyle}>
          <NavLinks clicked={(e) => this.navClickHandler(e)} />
        </footer>
      </div>
    );
  }
}

export default App;
