import React from 'react';
import {View, Text, ScrollView, Image, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';

import {AppRoutes, RootStackParamList} from 'src/navigation/types';
import {getEventByIdSelector} from 'src/core/event/selectors';
import {getDateStringFrom} from 'src/utils/date-utils';
import Badge from 'src/components/badge';
import s from './styles';

type EventRouteProp = RouteProp<RootStackParamList, AppRoutes.EventDetails>;

export default function EventDetailsScreen() {
  const route = useRoute<EventRouteProp>();
  const eventId = route.params?.eventId;

  const selectEventById = getEventByIdSelector(eventId);
  const event = useSelector(selectEventById);

  if (!event) {
    return null;
  }

  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      <View style={s.row}>
        <Text style={s.labelText}>Event Type</Text>
        <Badge text={event.type} />
      </View>

      <View style={s.row}>
        <Text style={s.labelText}>Actor</Text>

        <View style={s.actorWrapper}>
          {event.actor.avatarUrl && (
            <Image source={{uri: event.actor.avatarUrl}} style={s.avatar} />
          )}
          <Text style={s.actorText}>{event.actor.displayLogin}</Text>
        </View>
      </View>

      <View style={s.row}>
        <Text style={s.labelText}>Public</Text>
        <Switch value={event.public} disabled />
      </View>

      <View style={s.row}>
        <Text style={s.labelText}>Created At</Text>
        <Text style={s.timeText}>
          {getDateStringFrom(new Date(event.createdAt))}
        </Text>
      </View>
    </ScrollView>
  );
}
