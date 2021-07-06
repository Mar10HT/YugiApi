import React from "react";
//Importacion de la libreria creada con yarn add
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';
import theme from "../theme";

import HomeStackScreen from "./screens/HomeStack";
import SearchCardScreen from "./screens/SearchCardScreen";
import FavoritesStackScreen from "./screens/FavoritesScreen";

//Iconos desde librerias de expo para usarlos dentro de la barra de navegacion
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

//Creamos una constante para la creacion de la Tab
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    //La funcion de la bottom tab hace return de todo el componente Tab.Navigator y de Las screens que se le ingresan.
    return(
        <Tab.Navigator style={styles.tab}
        initialRouteName="Home"
        activeColor="#0d82ff"
        inactiveColor="#ffffff"
        barStyle={{ backgroundColor: theme.colors.blue}}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackScreen}
                options={{
                    //No les ponemos nombre porque nuestro diseño no lleva nombre, y solo le ponemos un icono que toma un tamaño y un color que se decide dependiendo de si
                    //la pantalla esta activa
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
                component={FavoritesStackScreen} 
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