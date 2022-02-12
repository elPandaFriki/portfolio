import { connect as reduxConnect } from "react-redux";
import { AppThunk, RootState } from "../redux";
import { deepCompare } from "../tools";

export function connect<OwnProps, MapState, MapDispatch>(
  mapState: (state: RootState, ownProps: OwnProps) => MapState,
  mapDispatch: (dispatch: AppThunk, ownProps: OwnProps) => MapDispatch
) {
  return reduxConnect(mapState, mapDispatch, null, {
    pure: true,
    areOwnPropsEqual: (next, prev) => {
      return deepCompare(next, prev);
    },
    areStatePropsEqual: (next, prev) => {
      return false;
    },
    forwardRef: true,
  });
}
