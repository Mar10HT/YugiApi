import React from 'react';
import { StyleSheet, View } from "react-native";
import Card from "./Card"

const CardList = ({card}) =>{

    return(
        <View>
            {card.meta && card.data.map((card) => {
                return <Card id = {card.id} name={card.name}  
                type = {card.type} race = {card.race} image={card.id} key = {card.id}/>;
            })}
        </View>
    )
}

const styles = StyleSheet.create({});

export default CardList;