import { configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().prepend().concat(thunk, logger);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkDispatch<{}, {}, any>;
export { store };
