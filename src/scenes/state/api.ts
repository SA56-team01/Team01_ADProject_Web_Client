import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserFeedbackData, UserHistoryPlaylistData } from "./types";

// need to FIX, think about the logic for this
console.log("VITE_JAVA_API_URL in api.ts:", import.meta.env.VITE_JAVA_API_URL);

// redux "hook" that handles my primary api call to get user data from java backend
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_JAVA_API_URL}`,
  }),
  endpoints: (builder) => ({
    // Fetch user history data
    fetchUserHistoryData: builder.query<UserHistoryPlaylistData, void>({
      query: () => "/api/playlists/all", // adjust this endpoint path as needed
    }),
    // Fetch feedback data
    fetchFeedbackData: builder.query<UserFeedbackData, void>({
      query: () => "/api/feedback/data", // adjust this endpoint path as needed
    }),
  }),
});

// Now you can use both hooks in your components:
export const { useFetchUserHistoryDataQuery, useFetchFeedbackDataQuery } = api;
export const { reducer: apiReducer } = api;
