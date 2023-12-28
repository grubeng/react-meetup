import { createSlice } from '@reduxjs/toolkit';

const initialState = { meetups: {} };

const meetupSlice = createSlice({
  name: 'meetUp',
  initialState,
  reducers: {},
});

export const {} = meetupSlice.actions;
export default meetupSlice.reducer;
