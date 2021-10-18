import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { Component } from "react";

interface TopBarState {}
interface TopBarProps {}

export default class TopBar extends Component<TopBarState, TopBarProps> {
  render(): JSX.Element {
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
