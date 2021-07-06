import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBox from '../SearchBox';
import { searchCard } from "../../api";
import CardSearchList from "../CardSearchList";

const SearchCard = ({ navigation }) => {
    const [card , setCard] = useState([""]);
    const [searchQuery, setSearchQuery] =  useState("");

    //funcion que filtra las cartas por su nombre
    const filteredCards = () => {
        card.filter(data =>(
            data.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))
    }

    const getCard = async () =>{
        const response = await searchCard(searchQuery);

        setCard(response);
    }

    useEffect(() => {
        getCard();
    }, [searchQuery]);

    return(
        // Se le agrega en data el valor de la funcion creada "filteredCards" a la CardSearchList el contenido de las cartas filtradas, para ser mostradas dentro de la 
        //flatlist.
        <View>
            <SearchBox placeholder="Enter card name ..." value={searchQuery} onChangeText={setSearchQuery}/>
            <CardSearchList card={card} data={filteredCards} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    cardType: {
        fontSize: 20,
        marginTop: 40,
        marginLeft: 20,
    },
    picker: {
        position: 'absolute',
        marginTop: 130,
        right: 30,
        width: 200,
        height: 35,
        borderWidth: 2,
        borderColor: '#11007e',
        borderRadius: 20
    }
});

export default SearchCard;