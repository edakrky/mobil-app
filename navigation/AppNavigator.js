import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home    from '../screens/Home';
import Profile from '../screens/Profile';
import MyMedicines from "../screens/MyMedicines";
import NewMedicine from "../screens/NewMedicine";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home"    component={Home}    />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyMedicines" component={MyMedicines} />
        <Stack.Screen name="NewMedicine" component={NewMedicine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
