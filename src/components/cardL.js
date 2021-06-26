import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "../components/card"

const CardList = ({card, navigation}) =>{

    return(
        <View>
            {card.meta && 
                card.data.map((card, index) => {
                    return (
                        <TouchableOpacity key = {index} onPress={() => {navigation.navigate("Card Details", { card })}}>
                            <Card desc = {card.desc} name={card.name}  
                            type = {card.type} race = {card.race} image={card.id}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({});

export default CardList;