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
      state.favourites = {
        ...state.favourites,
        [action.payload.id]: action.payload,
      };
    },
    removeMeetupFromFavourites: (state, action) => {
      const newFavourites = { ...state.favourites };
      delete newFavourites[action.payload.id];
      state.favourites = newFavourites;
    },
  },
});

export const {
  addMeetups,
  addMeetup,
  addMeetupToFavourites,
  removeMeetupFromFavourites,
} = meetupSlice.actions;
export default meetupSlice.reducer;
