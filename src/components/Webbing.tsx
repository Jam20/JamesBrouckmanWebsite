import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Particles from "react-tsparticles";
import { Colors } from "../globals";
import "./Webbing.scss";

export default class Webbing extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: Colors.primaryColorDark,
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "bubble",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 0.5,
                opacity: 0.8,
                size: 10,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.2,
                speed: 1,
              },
              attract: {
                distance: 200,
                duration: 0.1,
                speed: 1,
              },
            },
          },
          particles: {
            color: {
              value: Colors.primaryColorLight,
            },
            links: {
              color: Colors.secondaryColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 150,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}
