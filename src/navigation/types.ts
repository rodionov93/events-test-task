export type RootStackParamList = {
  EventListScreen: undefined;
  EventDetailsScreen: {
    eventId: string;
  };
};

export enum AppRoutes {
  EventList = 'EventListScreen',
  EventDetails = 'EventDetailsScreen',
}
