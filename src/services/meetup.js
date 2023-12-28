import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const meetupApi = createApi({
  reducerPath: 'meetupApi',
  baseQuery: fetchBaseQuery({ baseUrl: window.location.origin + '/' }),
  endpoints: (builder) => ({
    getMeetups: builder.query({
      query: (name) => 'data.json',
    }),
  }),
});

export const { useGetMeetupsQuery } = meetupApi;
