import App from "./Component";
import { connect } from "../../HOCs";
import { MapDispatch, MapState, OwnProps } from "./types";

export default connect<OwnProps, MapState, MapDispatch>(
  (state, ownProps) => {
    return {};
  },
  (dispatch, ownProps) => {
    return {};
  }
)(App);
