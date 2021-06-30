import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { searchCard } from "../../api";
import CardSearchList from "../CardSearchList";

const SearchCard = ({ navigation }) => {
    const [card , setCard] = useState("");

    const getCard = async () =>{
        const response = await searchCard(card);

        setCard(response);
    }

    useEffect(() => {
        getCard();
    }, [])

    const [searchQuery, setSearchQuery] =  useState("");
    const [selectedType, setSelectedType] = useState();

    return(
        <View>
            <Searchbar style={styles.searchbar}
                placeholder="Search cards by name."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onIconPress={() => navigation.navigate("Card Search", { searchQuery })}
            />
            <Text style={styles.cardType}>CardType</Text>
            <Picker style={styles.picker}
                selectedValue={selectedType}
                onValueChange={(itemValue) =>
                setSelectedType(itemValue)
            }>
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Monster" value="monster" />
                <Picker.Item label="Spell" value="spell" />
                <Picker.Item label="Trap" value="trap" />
            </Picker>
            <CardSearchList card={card} navigation={navigation}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        marginTop: 35,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#11007e',
        borderRadius: 30,
    },
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