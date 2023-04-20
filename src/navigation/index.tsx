import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {EventListScreen, EventDetailsScreen} from 'src/screens';
import {AppRoutes, RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.safeArea}>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Screen
              name={AppRoutes.EventList}
              component={EventListScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name={AppRoutes.EventDetails}
              component={EventDetailsScreen}
              options={{title: 'Event Details'}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
