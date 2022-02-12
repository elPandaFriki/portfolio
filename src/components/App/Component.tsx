import { Component } from "react";
import Presentation from "../Presentation";
import styles from "./styles.module.scss";
import { Props, State } from "./types";
import Chronology from "../Chronology";

export default class App extends Component<Props, State> {
  state: State = {};

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.presentation}>
          <Presentation />
        </div>
      </div>
    );
  }
}
