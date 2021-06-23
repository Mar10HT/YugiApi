import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
import getEnvVars from '../../enviroment';

const {imageUrl} = getEnvVars();

const Card = ({id, name, image, type, race}) =>{
    return(
         <View style= {styles.container}>
            <Text style= {styles.id}>{id}</Text>
            <Text style= {styles.name}>{name}</Text>
            <Image style= {styles.image} 
            source = {{
             uri : `${imageUrl}${image}.jpg` }}/>
            <Text style= {styles.type}>{type}</Text>
            <Text style= {styles.race}>{race}</Text>
         </View>
         ); 
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth:1,
        display: 'flex',
    },
    name: {
        fontSize: 18
    },
    image: {
        width: "auto",
        height: 300,
        resizeMode: "center",
    },
    id: {
        fontSize:16,
        fontWeight:'bold',
    },
    race:{
        fontSize:12,
        fontWeight:'bold',
    },
    type: {
        fontSize:12,
        fontWeight:'bold',
    },
});

export default Card;