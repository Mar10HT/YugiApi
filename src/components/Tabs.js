import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import theme from "../theme";

import HomeStackScreen from "./screens/HomeStack";
import SearchCardScreen from "./screens/SearchCardScreen";
import FavoriteCards from "./screens/Favorites";

import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator style={styles.tab}
        initialRouteName="Search"
        activeColor="#0d82ff"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: theme.colors.blue}}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchCardScreen} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Favorites" 
                component={FavoriteCards} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color}) => (
                        <AntDesign name="star" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({});

export default Tabs;