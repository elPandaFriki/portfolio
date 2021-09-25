import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { deepmerge } from "@mui/utils";
import React, { Component } from "react";
import { ThemeContext, ThemeController } from "../../../contexts";

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPalette = () => {
    const { themeContext } = this.props;
    const { mode } = themeContext;
    return deepmerge(
      {
        common: {
          black: "#000",
          white: "#fff",
        },
        primary: {
          main: "#004d40",
          light: "#39796b",
          dark: "#00251a",
          contrastText: "#fff",
          backgroundColor: "#282c34",
        },
        secondary: {
          main: "#911313",
          light: "#c8493a",
          dark: "#5d0000",
          contrastText: "#fff",
        },
        error: {
          main: "#f44336",
          light: "#e57373",
          dark: "#d32f2f",
          contrastText: "#fff",
        },
        warning: {
          main: "#ffa726",
          light: "#ffb74d",
          dark: "#f57c00",
          contrastText: "#fff",
        },
        info: {
          main: "#29b6f6",
          light: "#4fc3f7",
          dark: "#0288d1",
          contrastText: "#fff",
        },
        success: {
          main: "#66bb6a",
          light: "#81c784",
          dark: "#388e3c",
          contrastText: "#fff",
        },
        text: {
          primary: "rgba(0,0,0,0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)",
          icon: "rgba(255,255,255,0.4)",
        },
        divider: "rgba(255, 255, 255, 0.5)",
        background: {
          paper: "#fff",
          default: "#fff",
        },
        action: {
          active: "rgba(0,0,0,0.54)",
          hover: "rgba(0, 0, 0, 0.04)",
          hoverOpacity: 0.04,
          selected: "rgba(0, 0, 0, 0.8)",
          selectedOpacity: 0.8,
          disabled: "rgba(0, 0, 0, 0.26)",
          disabledBackground: "rgba(0, 0, 0, 0.12)",
          disabledOpacity: 0.38,
          focus: "rgba(0, 0, 0, 0.12)",
          focusOpacity: 0.12,
          activatedOpacity: 0.12,
        },
        grey: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161",
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
      },
      mode === "dark"
        ? {}
        : {
            primary: {
              contrastText: "rgba(0,0,0,0.87)",
              backgroundColor: "#7e8aa3",
            },
            secondary: {
              contrastText: "rgba(0,0,0,0.87)",
            },
            warning: {
              contrastText: "rgba(0, 0, 0, 0.87)",
            },
            info: {
              contrastText: "rgba(0, 0, 0, 0.87)",
            },
            success: {
              contrastText: "rgba(0, 0, 0, 0.87)",
            },
            divider: "rgba(0, 0, 0, 0.12)",
            text: {
              primary: "#fff",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              icon: "rgba(255, 255, 255, 0.5)",
            },
            background: {
              paper: "#121212",
              default: "#121212",
            },
            action: {
              active: "#fff",
              hover: "rgba(255, 255, 255, 0.08)",
              hoverOpacity: 0.08,
              selected: "rgba(255, 255, 255, 0.16)",
              selectedOpacity: 0.16,
              disabled: "rgba(255, 255, 255, 0.3)",
              disabledBackground: "rgba(255, 255, 255, 0.12)",
              disabledOpacity: 0.38,
              focus: "rgba(255, 255, 255, 0.12)",
              focusOpacity: 0.12,
              activatedOpacity: 0.24,
            },
          }
    );
  };

  getTheme = () => {
    const { themeContext } = this.props;
    const { mode } = themeContext;
    const breakpoints = {
      xs: 0,
      mobile: 0,
      sm: 600,
      tablet: 640,
      md: 900,
      laptop: 1024,
      lg: 1200,
      desktop: 1200,
      xl: 1536,
    };
    const palette = this.getPalette();
    return responsiveFontSizes(
      createTheme({
        mode,
        palette,
        typography: {
          diplay: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
        spacing: (factor) => {
          return `${0.25 * factor}rem`;
        },
        breakpoints: {
          keys: Object.keys(breakpoints),
          values: breakpoints,
        },
        transitions: {
          duration: {
            shortest: 150,
            leavingScreen: 195,
            shorter: 200,
            enteringScreen: 225,
            short: 250,
            standard: 300,
            complex: 375,
          },
          easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
          },
        },
        components: {
          MuiCheckbox: {
            styleOverrides: {
              root: {
                color: palette.primary.contrastText,
                "&.Mui-checked": {
                  color: palette.primary.contrastText,
                },
              },
            },
          },
        },
      })
    );
  };

  render() {
    const { children } = this.props;
    return <ThemeProvider theme={this.getTheme()}>{children}</ThemeProvider>;
  }
}

export default class ThemeConsumer extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeController>
        <ThemeContext.Consumer>
          {(themeContext) => {
            return <Theme themeContext={themeContext}>{children}</Theme>;
          }}
        </ThemeContext.Consumer>
      </ThemeController>
    );
  }
}
