import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/RootState"; // Import the RootState type
import { ApiState, UserFeedbackData, UserHistoryPlaylistData } from "./types";

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
export const selectUserStats = (state: RootState) => {
  const userData = selectUserData(state);
  if (!userData) {
    return [];
  }

  const userStatsMap: Record<string, number> = {};

  userData.forEach((playlist) => {
    const userId = playlist.user_id.toString(); // Convert to string since userId is a number
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
};

// selectTargetUserPlaylistAttributes
// testing with hardcoding user1 first
export const selectTargetUserPlaylists = (state: RootState) => {
  const userData = selectUserData(state);

  if (!userData) {
    return [];
  }

  const targetUserId = 1;
  const targetUserPlaylists = userData.filter(
    (playlist) => playlist.user_id === targetUserId
  );

  return targetUserPlaylists;
};

// uncomment when search function is done
// export const selectTargetUserPlaylists = (
//   state: RootState,
//   targetUserId: number
// ) => {
//   const userData = selectUserData(state);

//   if (!userData) {
//     return [];
//   }

//   const targetUserPlaylists = userData.filter(
//     (playlist) => playlist.user_id === targetUserId
//   );

//   return targetUserPlaylists;
// };

// selectUserFeedback

// selectUserGrowth

// selectUserPlaylistGeneratedLocations

// selectUserPlaylistGeneratedTimeOfDay

// Filter function
// selectUser1Playlist

export const selectIsLoading = (state: RootState) => state.api.loading;

export const { setUserData, setFeedbackData } = apiSlice.actions;
export const { actions: apiActions, reducer: apiReducer } = apiSlice;
