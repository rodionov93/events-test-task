export type ApiEventActor = {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
};

export type ApiEvent = {
  id: string;
  type: string;
  actor: ApiEventActor;
  public: boolean;
  created_at: string;
};

export type EventActor = {
  id: number;
  login: string;
  displayLogin: string;
  gravatarId: string;
  url: string;
  avatarUrl: string;
};

export type Event = {
  id: string;
  type: string;
  actor: EventActor;
  public: boolean;
  createdAt: string;
};
