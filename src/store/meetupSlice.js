import { createSlice } from '@reduxjs/toolkit';

const initialState = { meetups: {}, favourites: {} };

const meetupSlice = createSlice({
  name: 'meetup',
  initialState,
  reducers: {
    addMeetups: (state, action) => {
      state.meetups = { ...state.meetups, ...action.payload };
    },
    addMeetup: (state, action) => {
      state.meetups = { ...state.meetups, [action.payload.id]: action.payload };
    },
    addMeetupToFavourites: (state, action) => {
      state.meetups = {
        ...state.favourites,
        [action.payload.id]: action.payload,
      };
    },
  },
});

export const { addMeetups, addMeetup } = meetupSlice.actions;
export default meetupSlice.reducer;
