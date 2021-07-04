import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteCardList from '../FavoriteCardL'
import getEnvVars from '../../../enviroment';
import { Title } from 'react-native-paper';




const {apiUrl} = getEnvVars()

const FavoriteCards = ({ navigation }) => {
    const [card , setCard] = useState({});
   
    const getCard = async () =>{
        let list = [];
        let final = [];
        const favs = await AsyncStorage.getItem("favoritesCards");
        const data = JSON.parse(favs);
        for (let i = 0; i < data.length; i++) {
            let string = data[i];
            let repla = string.replace(/ /g, "%20");
            list.push(`${apiUrl}cardinfo.php?name=${repla}`)
        }
        for (let i = 0; i < list.length; i++) {
            const endpoint = `${list[i]}`
            const response = await fetch(endpoint);
            const data = await response.json();
            final.push(data)
        }
        const response = final;
        console.log(response);
        setCard(response);
        
    }

    useEffect(() => {
        getCard();
    }, [])

    console.log(card);

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