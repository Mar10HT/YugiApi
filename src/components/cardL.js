import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { Title } from 'react-native-paper';
import Card from "../components/card"

const CardList = ({ card, navigation }) =>{
    const emptyFlatList = (
        <View style={styles.title}>
            <Title>Card data not found :c</Title>
        </View>
    );

    return(
        <View style={styles.container}>
            <FlatList 
                data={""}
                keyExtractor={(item) => item.id.toString() }
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={emptyFlatList}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity key = {item.id} onPress={() => {navigation.navigate("Card Details", { item })}}>
                            <Card desc = {item.desc} name={item.name}  
                            type={item.type} race = {item.race} image={item.id} card={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 135
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CardList;