import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/RootState"; // Import the RootState type
import { ApiState, UserFeedbackData, UserHistoryPlaylistData } from "./types";
import { createSelector } from "reselect";

const initialState: ApiState = {
  data: [], // Update to use an empty array for data
  feedbackData: [], // Update to use an empty array for feedbackData
  loading: true,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserHistoryPlaylistData>) => {
      // Update payload type
      state.data = action.payload;
      state.loading = false;
    },
    setFeedbackData: (state, action: PayloadAction<UserFeedbackData>) => {
      // Update payload type
      state.feedbackData = action.payload;
      state.loading = false;
    },
  },
});

// select store
export const selectUserData = (state: RootState) => state.api.data;

// selectUserPlaylistCountStats
export const selectUserStats = createSelector([selectUserData], (userData) => {
  if (!userData) {
    return [];
  }

  const userStatsMap: Record<string, number> = {};

  userData.forEach((playlist) => {
    const userId = playlist.user_id.toString();
    if (!userStatsMap[userId]) {
      userStatsMap[userId] = 0;
    }
    userStatsMap[userId]++;
  });

  const userStats = Object.keys(userStatsMap).map((userId) => ({
    userId,
    playlistCount: userStatsMap[userId],
  }));

  return userStats;
});

// selectTargetUserPlaylistAttributes
// testing with hardcoding user1 first
export const selectTargetUserPlaylists = createSelector(
  [selectUserData], // The input selector
  (userData) => {
    // The result function
    if (!userData) {
      return [];
    }

    const targetUserId = 6;
    return userData.filter((playlist) => playlist.user_id === targetUserId);
  }
);

// uncomment when search function is done

// const makeSelectTargetUserPlaylists = () => {
//   return createSelector([selectUserData], (userData, targetUserId) => {
//     if (!userData) {
//       return [];
//     }
//     return userData.filter((playlist) => playlist.user_id === targetUserId);
//   });
// };

// selectUserFeedback
export const selectUserFeedback = (state: RootState) => {
  const feedbackData = state.api.feedbackData;

  if (!feedbackData) {
    return [];
  }

  // const filteredFeedback = feedbackData.filter((feedback) => {
  //   // conditional search for feedbackData
  //   // For example, if you want to filter out feedback with a rating less than 3:
  //   return feedback.rating >= 3;
  // });

  return feedbackData;
};

// selectUserGrowth

// selectUserPlaylistGeneratedLocations

// selectUserPlaylistTimestamps
export const selectPlaylistTimestamps = createSelector(
  [selectUserData], // The input selector
  (userData) => {
    // The result function
    if (!userData) {
      return [];
    }
    return userData.map((playlist) => playlist.timestamp_created);
  }
);

// Filter function
// selectUser1Playlist

export const selectIsLoading = (state: RootState) => state.api.loading;

export const { setUserData, setFeedbackData } = apiSlice.actions;
export const { actions: apiActions, reducer: apiReducer } = apiSlice;
