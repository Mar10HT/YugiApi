import React from 'react';
import { StyleSheet, View } from "react-native";
import Card from "./Card"

const CardList = ({card}) =>{

    return(
        <View>
            {card.data.map((id, name, race, type, image) => {
                return <Card id = {info.id} name={info.name}  
                type = {info.type} race = {info.race} image={info.card_images.image_url}  />;
            })}
        </View>
    )
}

const styles = StyleSheet.create({});

export default CardList;