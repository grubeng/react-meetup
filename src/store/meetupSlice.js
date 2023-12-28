import { createSlice } from '@reduxjs/toolkit';

const initialState = { meetups: {} };

const meetupSlice = createSlice({
  name: 'meetup',
  initialState,
  reducers: {
    addMeetups: (state, action) => {
      state.meetups = { ...state.meetups, ...action.payload };
    },
  },
});

export const { addMeetups } = meetupSlice.actions;
export default meetupSlice.reducer;
