import { Box, Card } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./About.scss";

export default class About extends Component {
  render(): JSX.Element {
    return (
      <Box id="aboutPrimaryBox">
        <h1 id="AboutHeading">About Me</h1>
        <p id="AboutText">
          Focused on building the integrated systems of tommorow. I have a
          passion for interconected embedded systems. This passion extends to
          larger scale embedded systems such as those in the robotics or
          automation space. In the next couple of years I hope to expand my
          knowledge base and pursue a career where I can architect these larger
          scale systems. I am also interested in approaching these problems from
          a project managment role as I love working with people and finding
          balances between requirments and creative design.
        </p>
      </Box>
    );
  }
}
