import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import getEnvVars from '../../enviroment';
import theme from '../theme';

const {imageUrl} = getEnvVars();

const CardImage = ({image}) => {
    return (
        <View style= {styles.imagecontainer}>
            <Image style={ styles.image }  
            source = {{
             uri : `${imageUrl}${image}.jpg` }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imagecontainer: {
        width: 170,
        height: 250,
        borderWidth:2,
        borderRadius: 25/2,
        borderColor: theme.colors.blue,
        borderWidth:3,
        alignSelf:"center",
        position: 'relative',
        top: 30,
        zIndex: 9999,
        overflow: 'hidden'
    },
    image: {
        width: 170,
        height: 250,
        resizeMode: "center",
        borderWidth:2,
        borderRadius: 25/2,
        borderColor: theme.colors.blue,
        borderWidth:3,
        alignSelf:"center",
        position: 'relative',
        bottom: 2 
    },
});

export default CardImage;