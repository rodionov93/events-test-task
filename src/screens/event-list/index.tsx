import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AppRoutes, RootStackParamList} from 'src/navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function EventListScreen() {
  const navigation = useNavigation<NavigationProp>();

  const navigateToDetails = () => {
    navigation.navigate(AppRoutes.EventDetails, {
      eventId: '1',
    });
  };

  return (
    <View>
      <Text>Event List Screen</Text>

      <Button title="Go To Details" onPress={navigateToDetails} />
    </View>
  );
}
