import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Webbing from "../components/Webbing";
import Particles from "react-tsparticles";
import { Colors } from "../globals";
import "./Landing.scss";

export default class Landing extends Component {
  render(): JSX.Element {
    return (
      <Box id="boxContainer">
        <Webbing />

        <h1>James Brouckman</h1>
        <h2>An embedded developer for the modern age</h2>
      </Box>
    );
  }
}
