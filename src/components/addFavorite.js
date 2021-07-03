import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleFavorite = async (name) =>{
    const response = await AsyncStorage.getItem("favoriteCard");
    let listOfCard = await JSON.parse(response) || [];
 
     console.log(listOfCard);
     alert(`${name.name} added to favorites`);
    
        
     listOfCard = [...listOfCard, (name.name)];
     await AsyncStorage.setItem(
      "favoriteCard",
      JSON.stringify(listOfCard)
     )
        
        
};

export const getFavorite = async() =>{
    const response = await AsyncStorage.getItem("favoriteCard");
    let listOfCard = await JSON.parse(response) || [];

    return listOfCard;
}





