import {
  combineReducers,
  createReducer,
  PayloadAction,
} from "@reduxjs/toolkit";
import { UPDATE_EXAMPLE } from "../actions";
import { UpdateExample, Example } from "../types";

const initialState: Example = {
  value: 0,
};

const reducers = combineReducers({
  example: createReducer(initialState, (builder) => {
    builder.addCase(
      UPDATE_EXAMPLE,
      (state, action: PayloadAction<UpdateExample>): void => {
        state.value = action.payload.value;
      }
    );
  }),
});

export default reducers;
