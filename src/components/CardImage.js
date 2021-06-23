import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import getEnvVars from '../../environment';

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
        width: "auto",
        height: 300,
        resizeMode: "center",
    },
});

export default CardImage;