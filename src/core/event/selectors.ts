import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const localState = (state: RootState) => state.event;

export const selectEventList = createSelector(localState, state => state.list);

export const selectIsLoading = createSelector(
  localState,
  state => state.isLoading,
);

export const selectEventError = createSelector(
  localState,
  state => state.error,
);

const selectEventById = createSelector(
  [selectEventList, (_, eventId) => eventId],
  (eventList, eventId) => eventList.find(event => event.id === eventId),
);

export const getEventByIdSelector = (eventId: string) => {
  return (state: RootState) => selectEventById(state, eventId);
};
