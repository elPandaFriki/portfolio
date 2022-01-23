import App from "./Component";
import { connect } from "react-redux";
import { deepCompare } from "../../tools";
import { MapDispatch, MapState, OwnProps } from "./types";
import { AppThunk, RootState } from "../../redux";
import { UPDATE_EXAMPLE } from "../../redux/actions";

export default connect(
  (state: RootState, ownProps: OwnProps): MapState => {
    return {
      example: state.example,
    };
  },
  (dispatch: AppThunk, ownProps: OwnProps): MapDispatch => {
    return {
      updateExample: (value) => {
        dispatch(
          UPDATE_EXAMPLE({
            value,
          })
        );
      },
    };
  },
  null,
  {
    pure: true,
    areOwnPropsEqual: (next, prev) => {
      return deepCompare(next, prev);
    },
    areStatePropsEqual: (next, prev) => {
      return false;
    },
    forwardRef: true,
  }
)(App);
