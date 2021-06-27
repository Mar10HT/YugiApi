import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs'
import TopBar from './src/components/TopBar';


export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}
