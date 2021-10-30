import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "./components/Providers";

const rootElement: JSX.Element = (
  <React.StrictMode>
    <ThemeProvider isMain={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(rootElement, document.getElementById("root"));
