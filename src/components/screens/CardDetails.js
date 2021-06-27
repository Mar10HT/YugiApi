import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardImage from '../CardImage'

const DetailsCard = ({ route }) => {
    const { card } = route.params;
    
    return(
        <View>
            <Text>{card.name}</Text>
            <CardImage image={card.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
});

export default DetailsCard;