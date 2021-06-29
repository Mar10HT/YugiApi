import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from "./src/theme";
import Tabs from './src/components/Tabs'

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </PaperProvider>
  )
}
