import { configureStore } from '@reduxjs/toolkit';
import meetupSlice from './meetupSlice';
import { meetupApi, setMeetUpsMiddleware } from '../services/meetup';

export default configureStore({
  reducer: {
    meetup: meetupSlice,
    meetupApi: meetupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([meetupApi.middleware, setMeetUpsMiddleware]),
});
