import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

let listOfCard;

export const handleFavorite = async (name) =>{
    const response = await AsyncStorage.getItem("favoritesCards");
    listOfCard = await JSON.parse(response) || [];
   
        if (listOfCard.includes(name.name)) {
            for (let i = 0; i < listOfCard.length; i++) {
                if(listOfCard[i] === name.name){
                    listOfCard.splice(i, 1);
                }  
            }
            alert(`${name.name} has been deleted from favorites`);
        }else{
            listOfCard = [...listOfCard, (name.name)];
            alert(`${name.name} added to favorites`);
        }

     await AsyncStorage.setItem(
      "favoritesCards",
      JSON.stringify(listOfCard)
     );
     
     console.log(listOfCard);
       
};

export const clearFavorites = async ()  =>{
    for (let i = 0; i < listOfCard.length; i++) {
            listOfCard.splice(i, 1);
    }  
}


