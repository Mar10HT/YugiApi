import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import SearchBox from '../SearchBox';
import { searchCard } from "../../api";
import CardSearchList from "../CardSearchList";

const SearchCard = ({ navigation }) => {
    const [card , setCard] = useState([""]);
    const [searchQuery, setSearchQuery] =  useState("");
    const [selectedType, setSelectedType] = useState("all");

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
        <View>
            <SearchBox placeholder="Enter card name ..." value={searchQuery} onChangeText={setSearchQuery}/>
            <Text style={styles.cardType}>CardType</Text>
            <Picker style={styles.picker}
                mode= "dropdown"
                selectedValue={selectedType}
                onValueChange={(itemValue) =>
                setSelectedType(itemValue)
            }>
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Monster" value="monster" />
                <Picker.Item label="Spell" value="spell" />
                <Picker.Item label="Trap" value="trap" />
            </Picker>
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