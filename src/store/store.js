import { configureStore } from '@reduxjs/toolkit';
import meetupSlice from './meetupSlice';
import { meetupApi } from '../services/meetup';

export default configureStore({
  reducer: {
    meetUp: meetupSlice,
    meetupApi: meetupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(meetupApi.middleware),
});
