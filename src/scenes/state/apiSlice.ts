import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/RootState"; // Import the RootState type
import { ApiState } from "./types";

const initialState: ApiState = {
  data: null,
};

// defines/intialises(?) the slicer
const apiSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ApiState>) => {
      state.data = action.payload.data;
    },
  },
});

// Selector for User Data Component
export const selectUserData = (state: RootState) => {
  const data = state.api.data;
  if (data) {
    return {
      playlist_id: data.playlist_id,
      user_id: data.user_id,
    };
  }
  return null;
};

// Selector for ...
export const selectLocationData = (state: RootState) => {
  const data = state.api.data;
  if (data) {
    return {
      latitude_created: data.latitude_created,
      longitude_created: data.longitude_created,
    };
  }
  return null;
};

export const { setData } = apiSlice.actions;
export default apiSlice.reducer;
