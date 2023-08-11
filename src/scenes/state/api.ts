import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetJavaApiResponse } from "./types";

// redux "hook" that handles my api calls to java backend
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (builder) => ({
    fetchMyData: builder.query<GetJavaApiResponse, void>({
      query: () => "api/my-data", // Adjust the endpoint path as needed depending on Ariel and Christine
    }),
  }),
});

export const { useFetchMyDataQuery } = api;
