import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addMeetups } from '../store/meetupSlice';
import store from '../store/store';

export const meetupApi = createApi({
  reducerPath: 'meetupApi',
  baseQuery: fetchBaseQuery({ baseUrl: window.location.origin + '/' }),
  endpoints: (builder) => ({
    getMeetups: builder.query({
      query: () => 'data.json',
    }),
  }),
});

export const setMeetUpsMiddleware = (_) => (next) => (action) => {
  const isGetMeetUpsFulfilled =
    meetupApi.endpoints.getMeetups.matchFulfilled(action);
  if (!isGetMeetUpsFulfilled) return next(action);
  if (!Array.isArray(action.payload)) return next(action);
  let retrievedMeetups = {};
  action.payload.forEach((meetup) => {
    retrievedMeetups = { ...retrievedMeetups, [meetup.id]: meetup };
  });
  store.dispatch(addMeetups(retrievedMeetups));
  return next(action);
};

export const { useGetMeetupsQuery } = meetupApi;
