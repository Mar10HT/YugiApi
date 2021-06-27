import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import DetailsCard from './CardDetails'
import Logo from '../Logo';

const HomeStack = createStackNavigator();


function HomeStackScreen() {
    return (
      <HomeStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#150061',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
      }}>
       <HomeStack.Screen name="Home" component={Home} options={{
           title: 'Millenium Database',
           headerLeft: () => <Logo/>
           }}/>
       <HomeStack.Screen name="Card Details" component={DetailsCard} options={{
           title: 'Card Details'
           }}/>
      </HomeStack.Navigator>
     );
   }

export default HomeStackScreen;