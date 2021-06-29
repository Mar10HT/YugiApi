import React from 'react';
import { StyleSheet, Text, View} from "react-native";
import CardImage from './CardImageSearch'

const CardSearch = ({name, image, type, level}) =>{
    return(
        <View style= {styles.container}>
            <CardImage image={image}/>
            <View style={styles.container2}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.level}>Level: {level}</Text>
                <Text style={styles.name}>Card Type: {type}</Text>
            </View>
         </View>
         
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
        borderColor: '#11007E',
    },
    container2: {
        display: 'flex',
        height: 'auto',
        alignItems: 'center',
        bottom: '90%',
    },
    name: {
        position: 'relative',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    level: {
        position: 'relative',
        marginLeft: 10,
    }
});

export default CardSearch;