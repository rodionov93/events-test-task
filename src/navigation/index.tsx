import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {EventListScreen, EventDetailsScreen} from 'src/screens';
import {AppRoutes, RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={AppRoutes.EventList}
          component={EventListScreen}
        />
        <RootStack.Screen
          name={AppRoutes.EventDetails}
          component={EventDetailsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
