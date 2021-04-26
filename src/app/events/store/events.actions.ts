import { createAction, props } from '@ngrx/store';

export const listEvents = createAction(
  '[Events] List Events',
  props<{events: Event[]}>()
);

export const deleteEvent = createAction(
  '[Events] Delete Event',
  props<{eventId}>()
);