import React, {useCallback} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';

import {AppRoutes, RootStackParamList} from 'src/navigation/types';
import {AppDispatch} from 'src/core/store';
import {fetchEvents} from 'src/core/event/actions';
import {Event} from 'src/core/event/types';
import {selectEventList, selectIsLoading} from 'src/core/event/selectors';
import EventListItem from 'src/components/event-list-item';
import useTimer from 'src/hooks/use-timer';
import s from './styles';

const REFRESH_SECONDS = 30;

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function EventListScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp>();

  const isLoading = useSelector(selectIsLoading);
  const eventList = useSelector(selectEventList);

  const refetchEvents = useCallback(() => dispatch(fetchEvents()), [dispatch]);
  const {manualRefresh} = useTimer(REFRESH_SECONDS, refetchEvents);

  const navigateToDetails = useCallback(
    (eventId: string) => {
      navigation.navigate(AppRoutes.EventDetails, {
        eventId,
      });
    },
    [navigation],
  );

  const keyExtractor = useCallback((event: Event) => event.id, []);
  const renderItem: ListRenderItem<Event> = useCallback(
    ({item}) => (
      <EventListItem
        id={item.id}
        title={item.type}
        actorLogin={item.actor.displayLogin}
        onPress={navigateToDetails}
      />
    ),
    [navigateToDetails],
  );

  return (
    <View style={s.container}>
      <FlatList
        data={eventList}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={manualRefresh}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
