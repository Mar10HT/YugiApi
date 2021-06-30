import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View} from "react-native";
import { Card } from 'react-native-paper';
import theme from '../theme';
import CardImage from './CardImage'
import { IconButton,  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';






const Card = ({desc, name, image, type, race}) =>{
    let favorite = false;
    return(
        <Card style= {styles.container}>
            <Card.Title title={name} style={styles.name} />
            <Card.Content>
            <CardImage image={image}/>
            <IconButton icon = {favorite ? "star" : "star-outline"}  onPress = {(favorite) =>{favorite=true}} color = "orange" size= "38" style = {styles.button}/>
            <View style = {styles.info} >
                <Text style= {styles.type}>Card Type: {type}</Text>
                <Text style= {styles.race}>Race: {race}</Text>
                <Text>Card Description</Text>
                <Text style= {styles.id}>{desc}</Text>
            </View>
            </Card.Content>
         </Card>
         
         );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth:2,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 25/2,
        borderColor: theme.colors.blue,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 9,
        },
        shadowOpacity: 0.50,    
        shadowRadius: 12.35,
        elevation: 19,
        height:650
        
    },
    info:{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent:'space-evenly',
        height:300,
        paddingBottom:20,
        
    },
    name: {
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
    button:{
        alignSelf:"flex-end",
        bottom:"45%",
        
    }
});

export default Cards;