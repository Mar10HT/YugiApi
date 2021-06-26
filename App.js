import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/components/screens/Home"
import CardDetails from "./src/components/screens/CardDetails"
import SearchCard from './src/components/screens/SearchCardScreen';
import Tabs from './src/components/Tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchCard}/>
        <Stack.Screen name="Millenium Database" component={Home}/>
        <Stack.Screen name="Card Details" component={CardDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
