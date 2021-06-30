import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from "./src/theme";
import Tabs from './src/components/Tabs'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="light" translucent={true}/>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </PaperProvider>
  )
}
