import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addMeetups } from '../store/meetupSlice';
import { createListenerMiddleware } from '@reduxjs/toolkit';
import store from '../store/store';

export const meetupApi = createApi({
  reducerPath: 'meetupApi',
  baseQuery: fetchBaseQuery({ baseUrl: window.location.origin + '/' }),
  endpoints: (builder) => ({
    getMeetups: builder.query({
      query: (name) => 'data.json',
    }),
  }),
});

export const setMeetUpsMiddleware = (storeApi) => (next) => (action) => {
  const isGetMeetUpsFulfilled =
    meetupApi.endpoints.getMeetups.matchFulfilled(action);
  if (!isGetMeetUpsFulfilled) return next(action);
  if (!Array.isArray(action.payload)) return next(action);
  store.dispatch(addMeetups(action.payload));
  return next(action);
};

export const { useGetMeetupsQuery } = meetupApi;
