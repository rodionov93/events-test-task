import {api} from '../api';
import {ApiEvent, Event} from './types';

const EVENTS_PER_PAGE = 25;

export const fetchEvents = async (
  count: number = EVENTS_PER_PAGE,
): Promise<Event[]> => {
  const response: ApiEvent[] = await api.get('events', {
    params: {
      per_page: count,
    },
  });

  if (!response) {
    return [];
  }

  return response.map(event => ({
    id: event.id,
    type: event.type,
    public: event.public,
    createdAt: event.created_at,
    actor: {
      id: event.actor.id,
      login: event.actor.login,
      displayLogin: event.actor.display_login,
      gravatarId: event.actor.gravatar_id,
      url: event.actor.url,
      avatarUrl: event.actor.avatar_url,
    },
  }));
};
