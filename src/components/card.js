import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import CardImage from './CardImage'

const Card = ({id, name, image, type, race}) =>{
    return(
         <View style= {styles.container}>
            <Text style= {styles.id}>{id}</Text>
            <Text style= {styles.name}>{name}</Text>
            <CardImage image={image}/>
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