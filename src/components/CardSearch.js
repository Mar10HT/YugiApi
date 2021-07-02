import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import { Card } from 'react-native-paper';
import CardImage from './CardImageSearch'
import theme from "../theme";

const CardSearch = ({name, image, type, level}) =>{
    return(
        <Card style= {styles.container}>
            <CardImage image={image}/>
            <View style={styles.container2}>
                <Card.Title title={name} style={styles.name} />
                <Card.Content style={styles.content}>
                    <Text style={styles.text}>Level: {level}</Text>
                    <Text style={styles.text}>Card Type: {type}</Text>
                </Card.Content>
            </View>
         </Card>
         
         );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 130,
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
        elevation: 10,
    },
    container2: {
        display: 'flex',
        height: 'auto',
        alignItems: 'center',
        bottom: '110%',
    },
    name: {
        left: '90%',
        fontWeight: 'bold',
    },
    text: {
        right: '11%'
    },
    content:{
        display:"flex",
        justifyContent:"center",
        left:"25%",
        width:"80%",
    },
});

export default CardSearch;