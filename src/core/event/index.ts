import {createSlice} from '@reduxjs/toolkit';

import {fetchEvents} from './actions';
import {Event} from './types';

type InitialState = {
  list: Event[];
  error: null | string;
  isLoading: boolean;
};

const initialState: InitialState = {
  list: [],
  error: null,
  isLoading: false,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEvents.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });

    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? '';
    });
  },
});

export const eventReducer = eventSlice.reducer;
