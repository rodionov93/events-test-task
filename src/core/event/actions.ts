import {createAsyncThunk} from '@reduxjs/toolkit';
import * as eventService from './service';

export const fetchEvents = createAsyncThunk('event/fetch', async () => {
  return eventService.fetchEvents();
});
