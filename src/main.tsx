import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./scenes/state/apiSlice";

export const store = configureStore({
  reducer: {
    api: apiSlice,
    // ...other reducers...
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
