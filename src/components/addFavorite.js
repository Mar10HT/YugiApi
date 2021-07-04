import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleFavorite = async (name) =>{
    const response = await AsyncStorage.getItem("favoritesCards");
    let listOfCard = await JSON.parse(response) || [];
    
   

     console.log(listOfCard);
    
    
   
        if (listOfCard.indexOf(name.name)) {
           
            alert(`${name.name} is already in favorites`);
        }else{
            listOfCard = [...listOfCard, (name.name)];
            alert(`${name.name} added to favorites`);
        }
         
     

     await AsyncStorage.setItem(
      "favoritesCards",
      JSON.stringify(listOfCard)
     );
     
        
       
};
export const clearFavorites = async ()  =>{
    try {
        await AsyncStorage.clear()
    } catch (error) {
        console.log(error)
    }
}




