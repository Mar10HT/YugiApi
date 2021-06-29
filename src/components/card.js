import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import CardImage from './CardImage'
import FavoriteIcon from './favoriteIcon';

const Card = ({desc, name, image, type, race, OnPress}) =>{
    return(
        <View style= {styles.container}>
            <Text style= {styles.name}>{name}</Text>
            <CardImage image={image}/>
            <FavoriteIcon  OnPress={() => {}}/>
            <View style = {styles.info} >
                
                <Text style= {styles.type}>Card Type: {type}</Text>
                <Text style= {styles.race}>Race: {race}</Text>
                <Text>Card Description</Text>
                <Text style= {styles.id}>{desc}</Text>
            </View>
         </View>
         
         );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth:1,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 25/2,
        borderColor: '#11007E',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,    
        shadowRadius: 12.35,
        elevation: 19,
        height:600
        
    },
    info:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent:'space-evenly',
        height:300,
        paddingBottom:20,
        
    },
    name: {
        fontSize: 20,
        textAlign:'center',
        position: 'relative',
        
    },
    id: {
        fontSize:12,
        width: "auto",
        position: 'relative',
         
    },
    race:{
        fontSize:12,
        fontWeight:'bold',
    
        textAlign:'left'
    },
    type: {
        fontSize:12,
        fontWeight:'bold',
        
    },
});

export default Card;