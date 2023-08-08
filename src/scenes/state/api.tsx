import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  // baseurl defined here
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  // it's saved into the tag
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    // start of the query
    getKpis: build.query<void, void>({
      //endpoint definition
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

// how you grab that particular hook
export const { useGetKpisQuery } = api;
