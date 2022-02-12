import { connect } from "../../HOCs";
import Component from "./Component";
import { OwnProps, MapState, MapDispatch } from "./types";

export default connect<OwnProps, MapState, MapDispatch>(
  (state, ownProps) => {
    return {};
  },
  (dispatch, ownProps) => {
    return {};
  }
)(Component);
