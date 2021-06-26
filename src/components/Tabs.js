import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';

import Home from "./screens/Home";
import SearchCard from "./screens/SearchCardScreen";
import FavoriteCards from "./screens/Favorites";

import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator style={styles.tab}
        initialRouteName="Home"
        activeColor="#0d82ff"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: '#150061'}}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchCard} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoriteCards} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="star" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#1f0075',
    }
})

export default Tabs;