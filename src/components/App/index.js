import { Checkbox, styled, Fab } from "@mui/material";
import { withStyles } from "@mui/styles";
import { compose } from "recompose";
import React, { Component } from "react";
import { ThemeContext } from "../../contexts";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import Tooltip from "../Tooltip";
import Presentation from "../Presentation";

const Root = styled("div")((props) => {
  const { layer, theme } = props;
  return {
    position: "absolute",
    zIndex: layer,
    width: "100%",
    height: "100%",
    color: theme.palette.primary.contrastText,
    pointerEvents: layer === 0 ? "auto" : "none",
    "& *": {
      pointerEvents: "auto",
    },
  };
});

const ThemeFab = styled(Fab)((props) => {
  return {
    height: "auto",
    position: "sticky",
    right: 0,
    top: 0,
    float: "right",
  };
});

class App extends Component {
  render() {
    const { themeContext, classes } = this.props;
    return (
      <React.Fragment>
        <Root layer={1}>
          <Tooltip
            title={
              themeContext.mode === "dark" ? "Bring the light!" : "Going dark"
            }
            placement={'left'}
          >
            <ThemeFab
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
            </ThemeFab>
          </Tooltip>
        </Root>
        <Root layer={0}>
          <Presentation />
        </Root>
      </React.Fragment>
    );
  }
}

const AppHOC = compose(
  withStyles((theme) => {
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
  })
)(App);

export default class AppConsumer extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          return <AppHOC themeContext={themeContext} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
