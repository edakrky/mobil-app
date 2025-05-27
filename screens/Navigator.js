import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }    from '@react-navigation/stack';

import Home    from './Home';
import Profile from './Profile';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home"    component={Home}    />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}