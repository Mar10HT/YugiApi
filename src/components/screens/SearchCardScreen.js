import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchCard from './SearchCard';
import DetailsCard from './CardDetails';
import Logo from '../Logo';

const HomeStack = createStackNavigator();

const SearchCardScreen = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#150061',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
        }}>
            <HomeStack.Screen name="Search" component={SearchCard} options={{
                title: 'Millenium Database',
                headerLeft: () => <Logo/>
            }}/>
            <HomeStack.Screen name="Card Search" component={DetailsCard} options={{
                headerTitle: false,
                headerRight: () => <Logo/>
            }}/>
        </HomeStack.Navigator>
    )
}

export default SearchCardScreen;