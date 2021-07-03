import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteCards from './Favorites';
import DetailsCard from './CardDetails';
import Logo from '../Logo';

const FavoritesStack = createStackNavigator();


function FavoritesStackScreen() {
    return (
      <FavoritesStack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#150061',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
      }}>
       <FavoritesStack.Screen name="Favorites" component={FavoriteCards} options={{
           title: 'Millenium Database',
           headerLeft: () => <Logo/>
           }}/>
       <FavoritesStack.Screen name="Card Details" component={DetailsCard} options={{
           headerTitle: false,
           headerRight: () => <Logo/>
           }}/>
      </FavoritesStack.Navigator>
     );
   }

export default FavoritesStackScreen;