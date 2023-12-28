import { configureStore } from '@reduxjs/toolkit';
import meetupSlice from './meetupSlice';

export default configureStore({
  reducer: {
    meetUp: meetupSlice,
  },
});
