import React from 'react';
import { StyleSheet, View } from "react-native";
import Card from "../components/card"

const CardList = ({card}) =>{

    return(
        <View>
            {card.meta && card.data.map((card, index) => {
                return <Card id = {card.id} name={card.name}  
                type = {card.type} race = {card.race} image={card.id} key = {index}/>;
            })}
        </View>
    )
}

const styles = StyleSheet.create({});

export default CardList;