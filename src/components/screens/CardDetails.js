import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from "react-native-paper";
import CardImage from '../CardImage'

const DetailsCard = ({ route }) => {
    const { item } = route.params;
    
    return(
        <View>
            <Title>{item.name}</Title>
            <CardImage image={item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default DetailsCard;