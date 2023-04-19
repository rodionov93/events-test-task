import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

import {View, Text} from 'react-native';
import {AppRoutes, RootStackParamList} from 'src/navigation/types';

type EventRouteProp = RouteProp<RootStackParamList, AppRoutes.EventDetails>;

export default function EventDetailsScreen() {
  const route = useRoute<EventRouteProp>();

  return (
    <View>
      <Text>Event Details Screen {route.params?.eventId}</Text>
    </View>
  );
}
