// Look up what a RootState file does...
import { combineReducers } from "redux";
import apiSlice from "./scenes/state/apiSlice";

const rootReducer = combineReducers({
  api: apiSlice,
  // ...other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;
