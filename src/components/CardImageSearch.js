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
        position: 'relative',
        alignSelf: 'flex-start',
        width: 75,
        height: 110,
        resizeMode: "center",
        borderWidth:2,
        borderRadius: 25/2,
        borderColor: '#11007E',
        borderWidth:3,
    },
});

export default CardImage;