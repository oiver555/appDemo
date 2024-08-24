// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screeng</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootLayout() {
  return (
    <NavigationContainer>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screeng</Text>
    </View>z
    </NavigationContainer>
  );
}

export default RootLayout;