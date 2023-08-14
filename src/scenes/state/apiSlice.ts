import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/RootState"; // Import the RootState type
import { ApiState, UserData, UserFeedbackData } from "./types";

const initialState: ApiState = {
  data: {},
  feedbackData: {},
  loading: true,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      state.loading = false;
    },
    setFeedbackData: (state, action: PayloadAction<UserFeedbackData>) => {
      state.feedbackData = action.payload;
      state.loading = false;
    },
  },
});

export const selectUserData = (state: RootState) => state.api.data;

// selectUserPlaylistStats
export const selectUserStats = (state: RootState) => {
  const userData = selectUserData(state);
  if (!userData) {
    return [];
  }
  const userStats = Object.keys(userData).map((userId) => ({
    userId,
    playlistCount: userData[userId].length,
  }));
  return userStats;
};

// selectUserFeedback

// selectUserGrowth

// selectUserPlaylistGeneratedLocations

// selectUserPlaylistGeneratedTimeOfDay

// Filter function
// selectUser1Playlist

export const selectIsLoading = (state: RootState) => state.api.loading;

export const { setUserData, setFeedbackData } = apiSlice.actions;
export const { actions: apiActions, reducer: apiReducer } = apiSlice;
