import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";


const Card = ({id, name, image, type, race}) =>{
    return(
         <View style={styles.container}>
            <Text style={style.id}>{id}</Text>
            <Text style={styles.name}>{name}</Text>
            <Image style={styles.image} 
            source = {image}/>
            <Text>{type}</Text>
            <Text>{race}</Text>
         </View>
         ); 
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 10,
        boderColor:"Black",
        borderWidth:1,
    },
    name:{
        fontSize: 18,
        fontWeigth: "bold",
    },
    image:{
        width: 340,
        height: 500,
    },
    id:{
        fontSize:22,
        fontWeight:"bold",
    },
});

export default Card;