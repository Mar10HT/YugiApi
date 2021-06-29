import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import getEnvVars from '../../enviroment';

const {imageUrl} = getEnvVars();

const CardImage = ({image}) => {
    return (
        <View>
            <Image style= {styles.image} 
            source = {{
             uri : `${imageUrl}${image}.jpg` }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 170,
        height: 250,
        resizeMode: "center",
        borderWidth:2,
        borderRadius: 25/2,
        borderColor: '#11007E',
        borderWidth:3,
        alignSelf:"center",
        position: 'relative',
        top: 20,
    },
});

export default CardImage;