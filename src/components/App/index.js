import { styled } from "@mui/material";
import React, { Component } from "react";
import Presentation from "../Presentation";
import Trayectory from "../Trayectory";
import Overlay from "../Overlay";

const Root = styled("div")((props) => {
  const { theme } = props;
  return {
    width: "100%",
    height: "100%",
    color: theme.palette.primary.contrastText,
  };
});

class App extends Component {
  render() {
    return (
      <Root>
        <Overlay />
        <Presentation /> 
          <Trayectory />
      </Root>
    );
  }
}

export default App;
