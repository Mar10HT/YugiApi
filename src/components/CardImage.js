import React, { useState } from 'react';
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
        width: 190,
        height: 270,
        borderRadius: 25/2,
        borderColor: '#11007E',
        alignSelf:"center",
        position: 'relative',
        top: 20,
        borderWidth: 2,
        resizeMode:"contain",
    },
});

export default CardImage;