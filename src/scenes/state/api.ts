import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserHistoryData } from "./types";

// need to FIX, think about the logic for this

// redux "hook" that handles my primary api call to get user data from java backend
export const api = createApi({
  reducerPath: "api",
  // adjust baseUrl after cloud deployment
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    fetchMyData: builder.query<UserHistoryData, void>({
      query: () => "user-data", // Adjust the endpoint path as needed depending on Ariel and Christine
    }),
  }),
});

export const { useFetchMyDataQuery } = api;
