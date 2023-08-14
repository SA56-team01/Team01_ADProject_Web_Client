// Look up what a RootState file does...
import { combineReducers } from "redux";
import { apiReducer } from "./scenes/state/apiSlice";
import authSlice from "./scenes/state/authSlice";

const rootReducer = combineReducers({
  api: apiReducer,
  auth: authSlice,
  // ...other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
