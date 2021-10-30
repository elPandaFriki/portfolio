import React, { Component } from "react";

const ThemeContext = React.createContext({});

ThemeContext.displayName = "ThemeContext";

interface Props {
  children: any;
}

interface State {
  mode: string;
}

class ThemeController extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      mode: "dark",
    };
  }

  toggleTheme = () => {
    const { mode } = this.state;
    this.setState({
      mode: mode === "dark" ? "light" : "dark",
    });
  };

  render() {
    const { children } = this.props;
    const { mode } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          mode,
          toggleTheme: () => {
            this.toggleTheme();
          },
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export { ThemeContext, ThemeController };
