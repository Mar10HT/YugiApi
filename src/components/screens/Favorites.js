import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFavorites } from '../addFavorite';
import { useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardList from '../cardL';
import { showFavorites } from '../../api';

const FavoriteCards = ({ navigation }) => {
    const [card , setCard] = useState({});
   
    const getCard = async () =>{
        
        const favs = await AsyncStorage.getItem("favoritesCards")
        const data = JSON.parse(favs)
        const response = await showFavorites(data)
        console.log(favs)
            
        
        setCard(response);
    }

    useEffect(() => {
        getCard();
    }, [])

    //console.log(card);

    return(
        <View>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
   title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavoriteCards;