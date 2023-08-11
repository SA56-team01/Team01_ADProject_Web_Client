import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/RootState"; // Import the RootState type
import { GetJavaApiResponse } from "./types";

interface ApiState {
  data: {
    [id: string]: GetJavaApiResponse;
  };
}

const initialState: ApiState = {
  data: {},
};

// check what this does...
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Selector for User Data Component
export const selectUserData = (state: RootState, id: string) => {
  const item = state.api.data[id];
  if (item) {
    return {
      playlist_id: item.playlist_id,
      user_id: item.user_id,
    };
  }
  return null;
};

// Selector for ...
export const selectLocationData = (state: RootState, id: string) => {
  const item = state.api.data[id];
  if (item) {
    return {
      latitude_created: item.latitude_created,
      longitude_created: item.longitude_created,
    };
  }
  return null;
};

export const { setData } = apiSlice.actions;
export default apiSlice.reducer;
