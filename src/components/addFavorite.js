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
        }else if (listOfCard.includes(Boolean)) {
            for (let i = 0; i < listOfCard.length; i++) {
                
                if(listOfCard[i] === Boolean){
                    listOfCard.splice(i, 1);
                }

            }
        }else{
            listOfCard = [...listOfCard, name.name];
            alert(`${name.name} has been added to favorites`)
        }
      
     await AsyncStorage.setItem(
      "favoritesCards",
      JSON.stringify(listOfCard.filter(Boolean))
     );
     
     console.log(listOfCard.filter(Boolean));
       
};

export const clearFavorites = async ()  =>{
  try {
      await AsyncStorage.clear();
      console.log(listOfCard);
  } catch (error) {
      console.log(error)
  } 
}


