import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFavorite } from '../addFavorite';
import { showFavorites } from '../../api';
import CardList from '../cardL';

const favorites = getFavorite;

console.log(getFavorite())

const FavoriteCards = ({ navigation }) => {
    const [card , setCard] = useState({});

    const getCard = async () =>{
        const response = await showFavorites(favorites);

        setCard(response);
    }

    useEffect(() => {
        getCard();
    }, [])

    return(
        <View>
            {favorites.meta && favorites.map((card) => {
                <Text></Text>
            })}
            
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