import { styled, Fab, Checkbox } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { ThemeContext } from "../../contexts";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import Tooltip from "../Tooltip";

const ToggleMenu = styled('div')((props) => {
  return {
    position: "relative",
    right: 0,
    top: 0,
  };
});

const Root = styled("div")((props) => {
  return {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    "& *": {
      pointerEvents: "auto",
    },
  };
});

class Overlay extends React.Component {
  render() {
    const { themeContext, classes } = this.props;
    return (
      <Root>
        <ToggleMenu>
          <Tooltip
            title={
              themeContext.mode === "dark" ? "Bring the light!" : "Going dark"
            }
            placement={"left"}
          >
            <Fab
              classes={{
                root: classes.Fab_root,
              }}
              variant="circular"
              color="primary"
              aria-label="toggle-theme"
            >
              <Checkbox
                color="primary"
                checked={themeContext.mode === "dark"}
                onChange={() => {
                  themeContext.toggleTheme();
                }}
                icon={<Brightness2 fontSize={"large"} />}
                checkedIcon={<Brightness7 fontSize={"large"} />}
              />
            </Fab>
          </Tooltip>
        </ToggleMenu>
      </Root>
    );
  }
}

const OverlayHOC = withStyles((theme) => {
  return {
    Fab_root: {
      backgroundColor: "rgba(0,0,0,0) !important",
      boxShadow: "none !important",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0) !important",
        boxShadow:
          "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important",
      },
    },
  };
})(Overlay);

class OverlayConsumer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          return <OverlayHOC themeContext={themeContext} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default OverlayConsumer;
